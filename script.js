debugger

function makeFunc() {
    const name = 'Mozilla';
    function anony() {
        function displayName() {
          console.log(name);
        }
        console.log(name);
        return displayName
    }
    return anony();
  }
  
  const myFunc = makeFunc();
  myFunc();