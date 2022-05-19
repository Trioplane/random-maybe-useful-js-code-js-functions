function countWord(inputID = "textarea", counterID = "p") {
    document.getElementById(inputID).addEventListener("input", () => {
      let counter_val = document.getElementById(inputID).value.length;
      document.getElementById(counterID).textContent = counter_val;
    });
}