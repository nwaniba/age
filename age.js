let PresentAge = document.getElementById("Age");
                let textDisplay = document.getElementById("txtDisplay");
                let RemainingAge = document.getElementById("RemainingAge")


                RemainingAge.addEventListener("click", countdown)
                
                function countdown(){

                        let  PresentAge = Age.value;
                        let  daysLeft = (90 - PresentAge) * 365;
                        let  weeksLeft = (90 - PresentAge) * 52;
                        let  monthsLeft= (90 - PresentAge) * 12;

                      
                        textDisplay.value = ("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.");