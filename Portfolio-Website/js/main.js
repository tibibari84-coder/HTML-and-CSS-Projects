(function () {
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");
  var menuLabel = navToggle ? navToggle.querySelector(".menu-label") : null;
  var mobileQuery = window.matchMedia("(max-width: 699px)");

  function setMenuOpen(open) {
    if (!navToggle || !nav) {
      return;
    }
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (menuLabel) {
      menuLabel.textContent = open ? "Close" : "Menu";
    }
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      setMenuOpen(navToggle.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (mobileQuery.matches) {
          setMenuOpen(false);
        }
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open") && mobileQuery.matches) {
        setMenuOpen(false);
        navToggle.focus();
      }
    });
  }

  var form = document.getElementById("contact-form");
  if (!form) {
    return;
  }

  var result = document.getElementById("form-result");
  var composed = document.getElementById("composed-note");
  var copyButton = document.getElementById("copy-note");
  var copyStatus = document.getElementById("copy-status");
  var fields = [
    {
      input: document.getElementById("contact-name"),
      error: document.getElementById("contact-name-error"),
      hintId: "",
      validate: function (value) {
        if (value.trim().length < 2) {
          return "Enter your name (at least 2 characters).";
        }
        return "";
      }
    },
    {
      input: document.getElementById("contact-email"),
      error: document.getElementById("contact-email-error"),
      hintId: "contact-email-hint",
      validate: function (value) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return "Enter an email address like name@example.com.";
        }
        return "";
      }
    },
    {
      input: document.getElementById("contact-topic"),
      error: document.getElementById("contact-topic-error"),
      hintId: "",
      validate: function (value) {
        if (!value.trim()) {
          return "Choose a topic.";
        }
        return "";
      }
    },
    {
      input: document.getElementById("contact-message"),
      error: document.getElementById("contact-message-error"),
      hintId: "contact-message-hint",
      validate: function (value) {
        if (value.trim().length < 10) {
          return "Enter a message of at least 10 characters.";
        }
        return "";
      }
    }
  ];

  function describedBy(field, showError) {
    var ids = [];
    if (field.hintId) {
      ids.push(field.hintId);
    }
    if (showError) {
      ids.push(field.error.id);
    }
    if (ids.length) {
      field.input.setAttribute("aria-describedby", ids.join(" "));
    } else {
      field.input.removeAttribute("aria-describedby");
    }
  }

  function setFieldError(field, message) {
    var invalid = Boolean(message);
    field.error.textContent = message;
    field.error.hidden = !invalid;
    if (invalid) {
      field.input.setAttribute("aria-invalid", "true");
    } else {
      field.input.removeAttribute("aria-invalid");
    }
    describedBy(field, invalid);
  }

  function topicLabel(value) {
    var select = document.getElementById("contact-topic");
    var option = select.options[select.selectedIndex];
    return option ? option.text : value;
  }

  function composeNote() {
    return [
      "Name: " + document.getElementById("contact-name").value.trim(),
      "Email: " + document.getElementById("contact-email").value.trim(),
      "Topic: " + topicLabel(document.getElementById("contact-topic").value),
      "",
      document.getElementById("contact-message").value.trim(),
      "",
      "Prepared on the Tibor Bari portfolio page. This note was not sent to a server."
    ].join("\n");
  }

  function validate(moveFocus) {
    var firstInvalid = null;
    fields.forEach(function (field) {
      var message = field.validate(field.input.value);
      setFieldError(field, message);
      if (message && !firstInvalid) {
        firstInvalid = field.input;
      }
    });

    if (firstInvalid) {
      if (result) {
        result.hidden = true;
      }
      if (copyStatus) {
        copyStatus.textContent = "";
      }
      if (moveFocus) {
        firstInvalid.focus();
      }
      return false;
    }
    return true;
  }

  fields.forEach(function (field) {
    describedBy(field, false);
    field.input.addEventListener("input", function () {
      if (form.getAttribute("data-checked") === "true") {
        validate(false);
      }
      if (result && !result.hidden) {
        result.hidden = true;
        if (copyStatus) {
          copyStatus.textContent = "";
        }
      }
    });
    field.input.addEventListener("change", function () {
      if (form.getAttribute("data-checked") === "true") {
        validate(false);
      }
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    form.setAttribute("data-checked", "true");
    if (!validate(true)) {
      return;
    }
    composed.textContent = composeNote();
    result.hidden = false;
    if (copyStatus) {
      copyStatus.textContent = "";
    }
    result.focus();
  });

  if (copyButton) {
    copyButton.addEventListener("click", function () {
      var note = composed.textContent;
      function showCopyMessage(message) {
        copyStatus.textContent = message;
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(note).then(function () {
          showCopyMessage("Copied. Paste it into a GitHub message if you want to continue.");
        }).catch(function () {
          showCopyMessage("The browser blocked automatic copy. Select the note above and copy it manually.");
        });
        return;
      }

      showCopyMessage("Select the note above and copy it manually.");
    });
  }
})();
