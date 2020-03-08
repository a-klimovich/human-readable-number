module.exports = function toReadable(number) {
  const tmp1 = {
      "0": ["zero", "ten"],
      "1": ["one", "eleven", "one hundred"],
      "2": ["two", "twelve", "two hundred"],
      "3": ["three", "thirteen", "three hundred"],
      "4": ["four", "fourteen", "four hundred"],
      "5": ["five", "fifteen", "five hundred"],
      "6": ["six", "sixteen", "six hundred"],
      "7": ["seven", "seventeen", "seven hundred"],
      "8": ["eight", "eighteen", "eight hundred"],
      "9": ["nine", "nineteen", "nine hundred"],
  };

  const exts = {
      "2": ['twenty', 'twenty'],
      "3": ['thirty', 'thirty'],
      "4": ['forty', 'forty'],
      "5": ['fifty', 'fifty'],
      "6": ['sixty', 'sixty'],
      "7": ['seventy', 'seventy'],
      "8": ['eighty', 'eighty'],
      "9": ['ninety', 'ninety'],
  };
  const arrNumber = number.toString().split('')

  if (arrNumber.length == 1) {
    return tmp1[arrNumber][0]
  }
  
  const arrNumberReverse = [...arrNumber].reverse()
  if (arrNumber.length == 2) {
    function fnCall(arrNumberReverse, ext) {
      const [a, b] = ext;

      return (arrNumberReverse[0] == 0) ? a : b + ' ' + tmp1[arrNumberReverse[0]][0];
    }

    if (arrNumberReverse[1] == 0 || arrNumberReverse[1] == 1) {
      return tmp1[arrNumberReverse[0]][arrNumber.length - 1]
    }

    function fnCall2(dozenNumder) {
      const condition = arrNumberReverse[1] == 0 || arrNumberReverse[1] == dozenNumder;

      if (condition) {
          return fnCall(arrNumberReverse, exts[dozenNumder]);
      }
    }

    return fnCall2(arrNumberReverse[1]);
  }

  if (arrNumber.length == 3) {

    function fnCall4(numCon) {
      const [a, b] = exts[arrNumberReverse[1]];
    
      return (arrNumberReverse[0] == 0) 
      ? tmp1[arrNumberReverse[2]][2] + " " + a
      : tmp1[arrNumberReverse[2]][2] + " " + b + ' ' + tmp1[arrNumberReverse[0]][0]
    }

     if ( arrNumberReverse[2] == 1 ) {

        if (arrNumberReverse[1] == 0 && arrNumberReverse[0] == 0) {
          return tmp1[arrNumberReverse[2]][2]
        }
    
        if (arrNumberReverse[1] == 0) {
          return tmp1[arrNumberReverse[2]][2] + " " + tmp1[arrNumberReverse[0]][0]
        }

        if (arrNumberReverse[1] == 1) {
          return tmp1[arrNumberReverse[2]][2] + " " + tmp1[arrNumberReverse[0]][1]
        }

        return fnCall4(arrNumberReverse[1])
     }

// 2
     if ( arrNumberReverse[2] == 2 ) {

      if (arrNumberReverse[1] == 0 && arrNumberReverse[0] == 0) {
        return tmp1[arrNumberReverse[2]][2]
      }

      if (arrNumberReverse[1] == 0) {
        return tmp1[arrNumberReverse[2]][2] + " " + tmp1[arrNumberReverse[0]][0]
      }

      if (arrNumberReverse[1] == 0 || arrNumberReverse[1] == 1) {
        return tmp1[arrNumberReverse[2]][2] + " " + tmp1[arrNumberReverse[0]][1]
      }

      if (arrNumberReverse[1] == 0 || arrNumberReverse[1] == 1) {
        return tmp1[arrNumberReverse[2]][2] + " " + tmp1[arrNumberReverse[0]][1]
      }

      return fnCall4(arrNumberReverse[1])
   }

    // 3
    if ( arrNumberReverse[2] == 3 ) {

    // TODO 
      if (arrNumberReverse[1] == 0 && arrNumberReverse[0] == 0) {
        return tmp1[arrNumberReverse[2]][2]
      }

      if (arrNumberReverse[1] == 0) {
        return tmp1[arrNumberReverse[2]][2] + " " + tmp1[arrNumberReverse[0]][0]
      }

      if (arrNumberReverse[1] == 0 || arrNumberReverse[1] == 1) {
        return tmp1[arrNumberReverse[2]][2] + " " + tmp1[arrNumberReverse[0]][1]
      }

      return fnCall4(arrNumberReverse[1])
    }
    // 4
    if ( arrNumberReverse[2] == 4 ) {

   // TODO 
      if (arrNumberReverse[1] == 0 && arrNumberReverse[0] == 0) {
        return tmp1[arrNumberReverse[2]][2]
      }

      if (arrNumberReverse[1] == 0) {
        return tmp1[arrNumberReverse[2]][2] + " " + tmp1[arrNumberReverse[0]][0]
      }

      if (arrNumberReverse[1] == 0 || arrNumberReverse[1] == 1) {
        return tmp1[arrNumberReverse[2]][2] + " " + tmp1[arrNumberReverse[0]][1]
      }

      return fnCall4(arrNumberReverse[1])
    }

    // 5
    if ( arrNumberReverse[2] == 5 ) {

   // TODO 
      if (arrNumberReverse[1] == 0 && arrNumberReverse[0] == 0) {
        return tmp1[arrNumberReverse[2]][2]
      }

    //  TODO
      if (arrNumberReverse[1] == 0) {
        return tmp1[arrNumberReverse[2]][2] + " " + tmp1[arrNumberReverse[0]][0]
      }

      if (arrNumberReverse[1] == 0 || arrNumberReverse[1] == 1) {
        return tmp1[arrNumberReverse[2]][2] + " " + tmp1[arrNumberReverse[0]][1]
      }

      return fnCall4(arrNumberReverse[1])
    }

    // 6
    if ( arrNumberReverse[2] == 6 ) {

        if (arrNumberReverse[1] == 0 && arrNumberReverse[0] == 0) {
          return tmp1[arrNumberReverse[2]][2]
        }

    //  TODO
        if (arrNumberReverse[1] == 0) {
          return tmp1[arrNumberReverse[2]][2] + " " + tmp1[arrNumberReverse[0]][0]
        }

        if (arrNumberReverse[1] == 0 || arrNumberReverse[1] == 1) {
          return tmp1[arrNumberReverse[2]][2] + " " + tmp1[arrNumberReverse[0]][1]
        }

        return fnCall4(arrNumberReverse[1])

      }
    // 7
    if ( arrNumberReverse[2] == 7 ) {

      if (arrNumberReverse[1] == 0 && arrNumberReverse[0] == 0) {
        return tmp1[arrNumberReverse[2]][2]
      }

    //  TODO
      if (arrNumberReverse[1] == 0) {
        return tmp1[arrNumberReverse[2]][2] + " " + tmp1[arrNumberReverse[0]][0]
      }

      if (arrNumberReverse[1] == 0 || arrNumberReverse[1] == 1) {
        return tmp1[arrNumberReverse[2]][2] + " " + tmp1[arrNumberReverse[0]][1]
      }

      return fnCall4(arrNumberReverse[1])
    }

    // 8
    if ( arrNumberReverse[2] == 8 ) {

      if (arrNumberReverse[1] == 0 && arrNumberReverse[0] == 0) {
          return tmp1[arrNumberReverse[2]][2]
        }

    //  TODO
        if (arrNumberReverse[1] == 0) {
          return tmp1[arrNumberReverse[2]][2] + " " + tmp1[arrNumberReverse[0]][0]
        }

        if (arrNumberReverse[1] == 0 || arrNumberReverse[1] == 1) {
          return tmp1[arrNumberReverse[2]][2] + " " + tmp1[arrNumberReverse[0]][1]
        }

        return fnCall4(arrNumberReverse[1])
      }

    // 9
    if ( arrNumberReverse[2] == 9 ) {

      if (arrNumberReverse[1] == 0 && arrNumberReverse[0] == 0) {
        return tmp1[arrNumberReverse[2]][2]
      }

    //  TODO
      if (arrNumberReverse[1] == 0) {
        return tmp1[arrNumberReverse[2]][2] + " " + tmp1[arrNumberReverse[0]][0]
      }

      if (arrNumberReverse[1] == 0 || arrNumberReverse[1] == 1) {
        return tmp1[arrNumberReverse[2]][2] + " " + tmp1[arrNumberReverse[0]][1]
      }

      return fnCall4(arrNumberReverse[1])
    }
  }
}