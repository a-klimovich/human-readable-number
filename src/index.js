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

  const arrNumber = number.toString().split('')

  if (arrNumber.length == 1) {
    return tmp1[arrNumber][0]
  }

  if (arrNumber.length == 2) {
    const arrNumberReverse = [...arrNumber].reverse()

    if (arrNumberReverse[1] == 0 || arrNumberReverse[1] == 1) {
      return tmp1[arrNumberReverse[0]][arrNumber.length - 1]
    }

    if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 2) {
      return (arrNumberReverse[0] == 0) ? 'twenty' : 'twenty' + ' ' + tmp1[arrNumberReverse[0]][0]
    }

    if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 3) {
      return (arrNumberReverse[0] == 0) ? 'thirty' : 'thirty' + ' ' + tmp1[arrNumberReverse[0]][0]
    }

    if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 4) {
      return (arrNumberReverse[0] == 0) ? 'forty' : 'forty' + ' ' +tmp1[arrNumberReverse[0]][0]
    }

    if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 5) {
      return (arrNumberReverse[0] == 0) ? 'fifty' : 'fifty' + ' ' +tmp1[arrNumberReverse[0]][0]
    }

    if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 6) {
      return (arrNumberReverse[0] == 0) ? 'sixty' : 'sixty' + ' ' +tmp1[arrNumberReverse[0]][0]
    }

    if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 7) {
      return (arrNumberReverse[0] == 0) ? 'seventy' : 'seventy' + ' ' +tmp1[arrNumberReverse[0]][0]
    }

    if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 8) {
      return (arrNumberReverse[0] == 0) ? 'eighty' : 'eighty' + ' ' +tmp1[arrNumberReverse[0]][0]
    }

    if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 9) {
      return (arrNumberReverse[0] == 0) ? 'ninety' : 'ninety' + ' ' +tmp1[arrNumberReverse[0]][0]
    }
  }

  if (arrNumber.length == 3) {
    const arrNumberReverse = [...arrNumber].reverse()
// 1
     if ( arrNumberReverse[2] == 1 ) {

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

        if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 2) {
          return (arrNumberReverse[0] == 0) 
          ? tmp1[arrNumberReverse[2]][2] + " " + 'twenty' 
          : tmp1[arrNumberReverse[2]][2] + " " +'twenty' + ' ' + tmp1[arrNumberReverse[0]][0]
        }

        if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 3) {
          return (arrNumberReverse[0] == 0) 
          ? tmp1[arrNumberReverse[2]][2] + " " + 'thirty' 
          : tmp1[arrNumberReverse[2]][2] + " " +'thirty' + ' ' + tmp1[arrNumberReverse[0]][0]
        }

        if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 4) {
          return (arrNumberReverse[0] == 0) 
          ? tmp1[arrNumberReverse[2]][2] + " " + 'forty' 
          : tmp1[arrNumberReverse[2]][2] + " " +'forty' + ' ' + tmp1[arrNumberReverse[0]][0]
        }

        if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 5) {
          return (arrNumberReverse[0] == 0) 
          ? tmp1[arrNumberReverse[2]][2] + " " + 'fifty' 
          : tmp1[arrNumberReverse[2]][2] + " " +'fifty' + ' ' + tmp1[arrNumberReverse[0]][0]
        }

        if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 6) {
          return (arrNumberReverse[0] == 0) 
          ? tmp1[arrNumberReverse[2]][2] + " " + 'sixty' 
          : tmp1[arrNumberReverse[2]][2] + " " +'sixty' + ' ' + tmp1[arrNumberReverse[0]][0]
        }

        if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 7) {
          return (arrNumberReverse[0] == 0) 
          ? tmp1[arrNumberReverse[2]][2] + " " + 'seventy' 
          : tmp1[arrNumberReverse[2]][2] + " " +'seventy' + ' ' + tmp1[arrNumberReverse[0]][0]
        }

        if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 8) {
          return (arrNumberReverse[0] == 0) 
          ? tmp1[arrNumberReverse[2]][2] + " " + 'eighty' 
          : tmp1[arrNumberReverse[2]][2] + " " +'eighty' + ' ' + tmp1[arrNumberReverse[0]][0]
        }

        if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 9) {
          return (arrNumberReverse[0] == 0) 
          ? tmp1[arrNumberReverse[2]][2] + " " + 'ninety' 
          : tmp1[arrNumberReverse[2]][2] + " " +'ninety' + ' ' + tmp1[arrNumberReverse[0]][0]
        }
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

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 2) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'twenty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'twenty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 3) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'thirty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'thirty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 4) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'forty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'forty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 5) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'fifty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'fifty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 6) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'sixty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'sixty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 7) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'seventy' 
        : tmp1[arrNumberReverse[2]][2] + " " +'seventy' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 8) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'eighty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'eighty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 9) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'ninety' 
        : tmp1[arrNumberReverse[2]][2] + " " +'ninety' + ' ' + tmp1[arrNumberReverse[0]][0]
      }
   }
    // 3
    if ( arrNumberReverse[2] == 3 ) {

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

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 2) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'twenty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'twenty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 3) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'thirty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'thirty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 4) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'forty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'forty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 5) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'fifty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'fifty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 6) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'sixty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'sixty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 7) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'seventy' 
        : tmp1[arrNumberReverse[2]][2] + " " +'seventy' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 8) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'eighty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'eighty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 9) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'ninety' 
        : tmp1[arrNumberReverse[2]][2] + " " +'ninety' + ' ' + tmp1[arrNumberReverse[0]][0]
      }
    }
    // 4
    if ( arrNumberReverse[2] == 4 ) {

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

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 2) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'twenty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'twenty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 3) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'thirty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'thirty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 4) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'forty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'forty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 5) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'fifty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'fifty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 6) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'sixty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'sixty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 7) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'seventy' 
        : tmp1[arrNumberReverse[2]][2] + " " +'seventy' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 8) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'eighty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'eighty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 9) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'ninety' 
        : tmp1[arrNumberReverse[2]][2] + " " +'ninety' + ' ' + tmp1[arrNumberReverse[0]][0]
      }
    }
    // 5
    if ( arrNumberReverse[2] == 5 ) {

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

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 2) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'twenty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'twenty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 3) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'thirty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'thirty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 4) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'forty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'forty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 5) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'fifty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'fifty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 6) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'sixty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'sixty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 7) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'seventy' 
        : tmp1[arrNumberReverse[2]][2] + " " +'seventy' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 8) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'eighty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'eighty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 9) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'ninety' 
        : tmp1[arrNumberReverse[2]][2] + " " +'ninety' + ' ' + tmp1[arrNumberReverse[0]][0]
      }
    }
    // 6
    if ( arrNumberReverse[2] == 6 ) {

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

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 2) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'twenty' 
              : tmp1[arrNumberReverse[2]][2] + " " +'twenty' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 3) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'thirty' 
              : tmp1[arrNumberReverse[2]][2] + " " +'thirty' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 4) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'forty' 
              : tmp1[arrNumberReverse[2]][2] + " " +'forty' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 5) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'fifty' 
              : tmp1[arrNumberReverse[2]][2] + " " +'fifty' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 6) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'sixty' 
              : tmp1[arrNumberReverse[2]][2] + " " +'sixty' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 7) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'seventy' 
              : tmp1[arrNumberReverse[2]][2] + " " +'seventy' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 8) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'eighty' 
              : tmp1[arrNumberReverse[2]][2] + " " +'eighty' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 9) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'ninety' 
              : tmp1[arrNumberReverse[2]][2] + " " +'ninety' + ' ' + tmp1[arrNumberReverse[0]][0]
            }
        }
    // 7
    if ( arrNumberReverse[2] == 7 ) {

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

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 2) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'twenty' 
              : tmp1[arrNumberReverse[2]][2] + " " +'twenty' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 3) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'thirty' 
              : tmp1[arrNumberReverse[2]][2] + " " +'thirty' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 4) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'forty' 
              : tmp1[arrNumberReverse[2]][2] + " " +'forty' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 5) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'fifty' 
              : tmp1[arrNumberReverse[2]][2] + " " +'fifty' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 6) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'sixty' 
              : tmp1[arrNumberReverse[2]][2] + " " +'sixty' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 7) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'seventy' 
              : tmp1[arrNumberReverse[2]][2] + " " +'seventy' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 8) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'eighty' 
              : tmp1[arrNumberReverse[2]][2] + " " +'eighty' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 9) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'ninety' 
              : tmp1[arrNumberReverse[2]][2] + " " +'ninety' + ' ' + tmp1[arrNumberReverse[0]][0]
            }
        }
    // 8
    if ( arrNumberReverse[2] == 8 ) {

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

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 2) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'twenty' 
              : tmp1[arrNumberReverse[2]][2] + " " +'twenty' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 3) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'thirty' 
              : tmp1[arrNumberReverse[2]][2] + " " +'thirty' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 4) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'forty' 
              : tmp1[arrNumberReverse[2]][2] + " " +'forty' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 5) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'fifty' 
              : tmp1[arrNumberReverse[2]][2] + " " +'fifty' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 6) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'sixty' 
              : tmp1[arrNumberReverse[2]][2] + " " +'sixty' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 7) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'seventy' 
              : tmp1[arrNumberReverse[2]][2] + " " +'seventy' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 8) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'eighty' 
              : tmp1[arrNumberReverse[2]][2] + " " +'eighty' + ' ' + tmp1[arrNumberReverse[0]][0]
            }

            if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 9) {
              return (arrNumberReverse[0] == 0) 
              ? tmp1[arrNumberReverse[2]][2] + " " + 'ninety' 
              : tmp1[arrNumberReverse[2]][2] + " " +'ninety' + ' ' + tmp1[arrNumberReverse[0]][0]
            }
        }
    // 9
    if ( arrNumberReverse[2] == 9 ) {

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

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 2) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'twenty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'twenty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 3) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'thirty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'thirty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 4) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'forty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'forty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 5) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'fifty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'fifty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 6) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'sixty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'sixty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 7) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'seventy' 
        : tmp1[arrNumberReverse[2]][2] + " " +'seventy' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 8) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'eighty' 
        : tmp1[arrNumberReverse[2]][2] + " " +'eighty' + ' ' + tmp1[arrNumberReverse[0]][0]
      }

      if(arrNumberReverse[1] == 0 || arrNumberReverse[1] == 9) {
        return (arrNumberReverse[0] == 0) 
        ? tmp1[arrNumberReverse[2]][2] + " " + 'ninety' 
        : tmp1[arrNumberReverse[2]][2] + " " +'ninety' + ' ' + tmp1[arrNumberReverse[0]][0]
      }
    }
  }

}