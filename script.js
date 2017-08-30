$(document).ready(function () {
    var alertGreen = $("#alertGreen")[0];
    var alertRed = $("#alertRed")[0];
    var alertYellow = $("#alertYellow")[0];
    var alertBlue = $("#alertBlue")[0];
    var generatedArray = [];
    var pushToArray = [];
    var clickedArray = [];
    var count = 1;
    var strict;
    var correct;
    var win = false;
    $("#restartButton").css("pointer-events", "none");
    $("#restartButton").css("opacity", "0.6");
    $(".pad").css("pointer-events", "none");
    while (generatedArray.length !== 20) {
        generatedArray.push(Math.floor(Math.random() * 4));
    }

    function timedOpacity() {

        if (count === 1) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                $("#startFont").html("Count: 1");
                if (pushToArray.length === 0) {
                    pushToArray.push(generatedArray[0]);
                }
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 3000);

        } else if (count === 2) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 1");
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
            }, 3000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "0.4");
                if (generatedArray[1] === 0) {
                    alertGreen.play();
                } else if (generatedArray[1] === 1) {
                    alertRed.play();
                } else if (generatedArray[1] === 2) {
                    alertYellow.play();
                } else if (generatedArray[1] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 2");
                if (pushToArray.length === 1) {
                    pushToArray.push(generatedArray[1]);
                }
            }, 4000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 5000);

        } else if (count === 3) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 1");
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
            }, 3000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "0.4");
                if (generatedArray[1] === 0) {
                    alertGreen.play();
                } else if (generatedArray[1] === 1) {
                    alertRed.play();
                } else if (generatedArray[1] === 2) {
                    alertYellow.play();
                } else if (generatedArray[1] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 2");
            }, 4000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "");
            }, 5000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "0.4");
                if (generatedArray[2] === 0) {
                    alertGreen.play();
                } else if (generatedArray[2] === 1) {
                    alertRed.play();
                } else if (generatedArray[2] === 2) {
                    alertYellow.play();
                } else if (generatedArray[2] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 3");
                if (pushToArray.length === 2) {
                    pushToArray.push(generatedArray[2]);
                }
            }, 6000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 7000);

        } else if (count === 4) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 1");
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
            }, 3000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "0.4");
                if (generatedArray[1] === 0) {
                    alertGreen.play();
                } else if (generatedArray[1] === 1) {
                    alertRed.play();
                } else if (generatedArray[1] === 2) {
                    alertYellow.play();
                } else if (generatedArray[1] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 2");
            }, 4000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "");
            }, 5000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "0.4");
                if (generatedArray[2] === 0) {
                    alertGreen.play();
                } else if (generatedArray[2] === 1) {
                    alertRed.play();
                } else if (generatedArray[2] === 2) {
                    alertYellow.play();
                } else if (generatedArray[2] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 3");
            }, 6000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "");
            }, 7000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "0.4");
                if (generatedArray[3] === 0) {
                    alertGreen.play();
                } else if (generatedArray[3] === 1) {
                    alertRed.play();
                } else if (generatedArray[3] === 2) {
                    alertYellow.play();
                } else if (generatedArray[3] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 4");
                if (pushToArray.length === 3) {
                    pushToArray.push(generatedArray[3]);
                }
            }, 8000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 9000);

        } else if (count === 5) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 1");
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
            }, 3000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "0.4");
                if (generatedArray[1] === 0) {
                    alertGreen.play();
                } else if (generatedArray[1] === 1) {
                    alertRed.play();
                } else if (generatedArray[1] === 2) {
                    alertYellow.play();
                } else if (generatedArray[1] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 2");
            }, 4000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "");
            }, 5000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "0.4");
                if (generatedArray[2] === 0) {
                    alertGreen.play();
                } else if (generatedArray[2] === 1) {
                    alertRed.play();
                } else if (generatedArray[2] === 2) {
                    alertYellow.play();
                } else if (generatedArray[2] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 3");
            }, 6000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "");
            }, 7000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "0.4");
                if (generatedArray[3] === 0) {
                    alertGreen.play();
                } else if (generatedArray[3] === 1) {
                    alertRed.play();
                } else if (generatedArray[3] === 2) {
                    alertYellow.play();
                } else if (generatedArray[3] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 4");
            }, 8000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "");
            }, 9000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "0.4");
                if (generatedArray[4] === 0) {
                    alertGreen.play();
                } else if (generatedArray[4] === 1) {
                    alertRed.play();
                } else if (generatedArray[4] === 2) {
                    alertYellow.play();
                } else if (generatedArray[4] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 5");
                if (pushToArray.length === 4) {
                    pushToArray.push(generatedArray[4]);
                }
            }, 10000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 11000);

        } else if (count === 6) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 1");
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
            }, 3000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "0.4");
                if (generatedArray[1] === 0) {
                    alertGreen.play();
                } else if (generatedArray[1] === 1) {
                    alertRed.play();
                } else if (generatedArray[1] === 2) {
                    alertYellow.play();
                } else if (generatedArray[1] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 2");
            }, 4000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "");
            }, 5000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "0.4");
                if (generatedArray[2] === 0) {
                    alertGreen.play();
                } else if (generatedArray[2] === 1) {
                    alertRed.play();
                } else if (generatedArray[2] === 2) {
                    alertYellow.play();
                } else if (generatedArray[2] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 3");
            }, 6000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "");
            }, 7000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "0.4");
                if (generatedArray[3] === 0) {
                    alertGreen.play();
                } else if (generatedArray[3] === 1) {
                    alertRed.play();
                } else if (generatedArray[3] === 2) {
                    alertYellow.play();
                } else if (generatedArray[3] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 4");
            }, 8000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "");
            }, 9000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "0.4");
                if (generatedArray[4] === 0) {
                    alertGreen.play();
                } else if (generatedArray[4] === 1) {
                    alertRed.play();
                } else if (generatedArray[4] === 2) {
                    alertYellow.play();
                } else if (generatedArray[4] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 5");
            }, 10000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "");
            }, 11000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "0.4");
                if (generatedArray[5] === 0) {
                    alertGreen.play();
                } else if (generatedArray[5] === 1) {
                    alertRed.play();
                } else if (generatedArray[5] === 2) {
                    alertYellow.play();
                } else if (generatedArray[5] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 6");
                if (pushToArray.length === 5) {
                    pushToArray.push(generatedArray[5]);
                }
            }, 12000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 13000);

        } else if (count === 7) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 1");
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
            }, 3000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "0.4");
                if (generatedArray[1] === 0) {
                    alertGreen.play();
                } else if (generatedArray[1] === 1) {
                    alertRed.play();
                } else if (generatedArray[1] === 2) {
                    alertYellow.play();
                } else if (generatedArray[1] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 2");
            }, 4000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "");
            }, 5000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "0.4");
                if (generatedArray[2] === 0) {
                    alertGreen.play();
                } else if (generatedArray[2] === 1) {
                    alertRed.play();
                } else if (generatedArray[2] === 2) {
                    alertYellow.play();
                } else if (generatedArray[2] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 3");
            }, 6000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "");
            }, 7000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "0.4");
                if (generatedArray[3] === 0) {
                    alertGreen.play();
                } else if (generatedArray[3] === 1) {
                    alertRed.play();
                } else if (generatedArray[3] === 2) {
                    alertYellow.play();
                } else if (generatedArray[3] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 4");
            }, 8000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "");
            }, 9000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "0.4");
                if (generatedArray[4] === 0) {
                    alertGreen.play();
                } else if (generatedArray[4] === 1) {
                    alertRed.play();
                } else if (generatedArray[4] === 2) {
                    alertYellow.play();
                } else if (generatedArray[4] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 5");
            }, 10000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "");
            }, 11000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "0.4");
                if (generatedArray[5] === 0) {
                    alertGreen.play();
                } else if (generatedArray[5] === 1) {
                    alertRed.play();
                } else if (generatedArray[5] === 2) {
                    alertYellow.play();
                } else if (generatedArray[5] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 6");
            }, 12000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "");
            }, 13000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "0.4");
                if (generatedArray[6] === 0) {
                    alertGreen.play();
                } else if (generatedArray[6] === 1) {
                    alertRed.play();
                } else if (generatedArray[6] === 2) {
                    alertYellow.play();
                } else if (generatedArray[6] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 7");
                if (pushToArray.length === 6) {
                    pushToArray.push(generatedArray[6]);
                }
            }, 14000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 15000);

        } else if (count === 8) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 1");
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
            }, 3000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "0.4");
                if (generatedArray[1] === 0) {
                    alertGreen.play();
                } else if (generatedArray[1] === 1) {
                    alertRed.play();
                } else if (generatedArray[1] === 2) {
                    alertYellow.play();
                } else if (generatedArray[1] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 2");
            }, 4000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "");
            }, 5000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "0.4");
                if (generatedArray[2] === 0) {
                    alertGreen.play();
                } else if (generatedArray[2] === 1) {
                    alertRed.play();
                } else if (generatedArray[2] === 2) {
                    alertYellow.play();
                } else if (generatedArray[2] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 3");
            }, 6000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "");
            }, 7000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "0.4");
                if (generatedArray[3] === 0) {
                    alertGreen.play();
                } else if (generatedArray[3] === 1) {
                    alertRed.play();
                } else if (generatedArray[3] === 2) {
                    alertYellow.play();
                } else if (generatedArray[3] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 4");
            }, 8000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "");
            }, 9000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "0.4");
                if (generatedArray[4] === 0) {
                    alertGreen.play();
                } else if (generatedArray[4] === 1) {
                    alertRed.play();
                } else if (generatedArray[4] === 2) {
                    alertYellow.play();
                } else if (generatedArray[4] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 5");
            }, 10000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "");
            }, 11000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "0.4");
                if (generatedArray[5] === 0) {
                    alertGreen.play();
                } else if (generatedArray[5] === 1) {
                    alertRed.play();
                } else if (generatedArray[5] === 2) {
                    alertYellow.play();
                } else if (generatedArray[5] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 6");
            }, 12000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "");
            }, 13000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "0.4");
                if (generatedArray[6] === 0) {
                    alertGreen.play();
                } else if (generatedArray[6] === 1) {
                    alertRed.play();
                } else if (generatedArray[6] === 2) {
                    alertYellow.play();
                } else if (generatedArray[6] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 7");
            }, 14000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "");
            }, 15000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "0.4");
                if (generatedArray[7] === 0) {
                    alertGreen.play();
                } else if (generatedArray[7] === 1) {
                    alertRed.play();
                } else if (generatedArray[7] === 2) {
                    alertYellow.play();
                } else if (generatedArray[7] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 8");
                if (pushToArray.length === 7) {
                    pushToArray.push(generatedArray[7]);
                }
            }, 16000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 17000);

        } else if (count === 9) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 1");
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
            }, 3000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "0.4");
                if (generatedArray[1] === 0) {
                    alertGreen.play();
                } else if (generatedArray[1] === 1) {
                    alertRed.play();
                } else if (generatedArray[1] === 2) {
                    alertYellow.play();
                } else if (generatedArray[1] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 2");
            }, 4000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "");
            }, 5000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "0.4");
                if (generatedArray[2] === 0) {
                    alertGreen.play();
                } else if (generatedArray[2] === 1) {
                    alertRed.play();
                } else if (generatedArray[2] === 2) {
                    alertYellow.play();
                } else if (generatedArray[2] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 3");
            }, 6000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "");
            }, 7000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "0.4");
                if (generatedArray[3] === 0) {
                    alertGreen.play();
                } else if (generatedArray[3] === 1) {
                    alertRed.play();
                } else if (generatedArray[3] === 2) {
                    alertYellow.play();
                } else if (generatedArray[3] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 4");
            }, 8000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "");
            }, 9000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "0.4");
                if (generatedArray[4] === 0) {
                    alertGreen.play();
                } else if (generatedArray[4] === 1) {
                    alertRed.play();
                } else if (generatedArray[4] === 2) {
                    alertYellow.play();
                } else if (generatedArray[4] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 5");
            }, 10000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "");
            }, 11000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "0.4");
                if (generatedArray[5] === 0) {
                    alertGreen.play();
                } else if (generatedArray[5] === 1) {
                    alertRed.play();
                } else if (generatedArray[5] === 2) {
                    alertYellow.play();
                } else if (generatedArray[5] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 6");
            }, 12000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "");
            }, 13000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "0.4");
                if (generatedArray[6] === 0) {
                    alertGreen.play();
                } else if (generatedArray[6] === 1) {
                    alertRed.play();
                } else if (generatedArray[6] === 2) {
                    alertYellow.play();
                } else if (generatedArray[6] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 7");
            }, 14000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "");
            }, 15000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "0.4");
                if (generatedArray[7] === 0) {
                    alertGreen.play();
                } else if (generatedArray[7] === 1) {
                    alertRed.play();
                } else if (generatedArray[7] === 2) {
                    alertYellow.play();
                } else if (generatedArray[7] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 8");
            }, 16000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "");
            }, 17000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "0.4");
                if (generatedArray[8] === 0) {
                    alertGreen.play();
                } else if (generatedArray[8] === 1) {
                    alertRed.play();
                } else if (generatedArray[8] === 2) {
                    alertYellow.play();
                } else if (generatedArray[8] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 9");
                if (pushToArray.length === 8) {
                    pushToArray.push(generatedArray[8]);
                }
            }, 18000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 19000);

        } else if (count === 10) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 1");
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
            }, 3000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "0.4");
                if (generatedArray[1] === 0) {
                    alertGreen.play();
                } else if (generatedArray[1] === 1) {
                    alertRed.play();
                } else if (generatedArray[1] === 2) {
                    alertYellow.play();
                } else if (generatedArray[1] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 2");
            }, 4000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "");
            }, 5000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "0.4");
                if (generatedArray[2] === 0) {
                    alertGreen.play();
                } else if (generatedArray[2] === 1) {
                    alertRed.play();
                } else if (generatedArray[2] === 2) {
                    alertYellow.play();
                } else if (generatedArray[2] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 3");
            }, 6000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "");
            }, 7000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "0.4");
                if (generatedArray[3] === 0) {
                    alertGreen.play();
                } else if (generatedArray[3] === 1) {
                    alertRed.play();
                } else if (generatedArray[3] === 2) {
                    alertYellow.play();
                } else if (generatedArray[3] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 4");
            }, 8000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "");
            }, 9000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "0.4");
                if (generatedArray[4] === 0) {
                    alertGreen.play();
                } else if (generatedArray[4] === 1) {
                    alertRed.play();
                } else if (generatedArray[4] === 2) {
                    alertYellow.play();
                } else if (generatedArray[4] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 5");
            }, 10000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "");
            }, 11000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "0.4");
                if (generatedArray[5] === 0) {
                    alertGreen.play();
                } else if (generatedArray[5] === 1) {
                    alertRed.play();
                } else if (generatedArray[5] === 2) {
                    alertYellow.play();
                } else if (generatedArray[5] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 6");
            }, 12000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "");
            }, 13000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "0.4");
                if (generatedArray[6] === 0) {
                    alertGreen.play();
                } else if (generatedArray[6] === 1) {
                    alertRed.play();
                } else if (generatedArray[6] === 2) {
                    alertYellow.play();
                } else if (generatedArray[6] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 7");
            }, 14000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "");
            }, 15000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "0.4");
                if (generatedArray[7] === 0) {
                    alertGreen.play();
                } else if (generatedArray[7] === 1) {
                    alertRed.play();
                } else if (generatedArray[7] === 2) {
                    alertYellow.play();
                } else if (generatedArray[7] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 8");
            }, 16000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "");
            }, 17000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "0.4");
                if (generatedArray[8] === 0) {
                    alertGreen.play();
                } else if (generatedArray[8] === 1) {
                    alertRed.play();
                } else if (generatedArray[8] === 2) {
                    alertYellow.play();
                } else if (generatedArray[8] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 9");
            }, 18000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "");
            }, 19000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "0.4");
                if (generatedArray[9] === 0) {
                    alertGreen.play();
                } else if (generatedArray[9] === 1) {
                    alertRed.play();
                } else if (generatedArray[9] === 2) {
                    alertYellow.play();
                } else if (generatedArray[9] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 10");
                if (pushToArray.length === 9) {
                    pushToArray.push(generatedArray[9]);
                }
            }, 20000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 21000);

        } else if (count === 11) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 1");
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
            }, 3000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "0.4");
                if (generatedArray[1] === 0) {
                    alertGreen.play();
                } else if (generatedArray[1] === 1) {
                    alertRed.play();
                } else if (generatedArray[1] === 2) {
                    alertYellow.play();
                } else if (generatedArray[1] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 2");
            }, 4000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "");
            }, 5000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "0.4");
                if (generatedArray[2] === 0) {
                    alertGreen.play();
                } else if (generatedArray[2] === 1) {
                    alertRed.play();
                } else if (generatedArray[2] === 2) {
                    alertYellow.play();
                } else if (generatedArray[2] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 3");
            }, 6000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "");
            }, 7000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "0.4");
                if (generatedArray[3] === 0) {
                    alertGreen.play();
                } else if (generatedArray[3] === 1) {
                    alertRed.play();
                } else if (generatedArray[3] === 2) {
                    alertYellow.play();
                } else if (generatedArray[3] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 4");
            }, 8000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "");
            }, 9000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "0.4");
                if (generatedArray[4] === 0) {
                    alertGreen.play();
                } else if (generatedArray[4] === 1) {
                    alertRed.play();
                } else if (generatedArray[4] === 2) {
                    alertYellow.play();
                } else if (generatedArray[4] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 5");
            }, 10000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "");
            }, 11000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "0.4");
                if (generatedArray[5] === 0) {
                    alertGreen.play();
                } else if (generatedArray[5] === 1) {
                    alertRed.play();
                } else if (generatedArray[5] === 2) {
                    alertYellow.play();
                } else if (generatedArray[5] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 6");
            }, 12000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "");
            }, 13000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "0.4");
                if (generatedArray[6] === 0) {
                    alertGreen.play();
                } else if (generatedArray[6] === 1) {
                    alertRed.play();
                } else if (generatedArray[6] === 2) {
                    alertYellow.play();
                } else if (generatedArray[6] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 7");
            }, 14000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "");
            }, 15000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "0.4");
                if (generatedArray[7] === 0) {
                    alertGreen.play();
                } else if (generatedArray[7] === 1) {
                    alertRed.play();
                } else if (generatedArray[7] === 2) {
                    alertYellow.play();
                } else if (generatedArray[7] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 8");
            }, 16000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "");
            }, 17000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "0.4");
                if (generatedArray[8] === 0) {
                    alertGreen.play();
                } else if (generatedArray[8] === 1) {
                    alertRed.play();
                } else if (generatedArray[8] === 2) {
                    alertYellow.play();
                } else if (generatedArray[8] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 9");
            }, 18000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "");
            }, 19000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "0.4");
                if (generatedArray[9] === 0) {
                    alertGreen.play();
                } else if (generatedArray[9] === 1) {
                    alertRed.play();
                } else if (generatedArray[9] === 2) {
                    alertYellow.play();
                } else if (generatedArray[9] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 10");
            }, 20000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "");
            }, 21000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "0.4");
                if (generatedArray[10] === 0) {
                    alertGreen.play();
                } else if (generatedArray[10] === 1) {
                    alertRed.play();
                } else if (generatedArray[10] === 2) {
                    alertYellow.play();
                } else if (generatedArray[10] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 11");
                if (pushToArray.length === 10) {
                    pushToArray.push(generatedArray[10]);
                }
            }, 22000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 23000);


        } else if (count === 12) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 1");
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
            }, 3000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "0.4");
                if (generatedArray[1] === 0) {
                    alertGreen.play();
                } else if (generatedArray[1] === 1) {
                    alertRed.play();
                } else if (generatedArray[1] === 2) {
                    alertYellow.play();
                } else if (generatedArray[1] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 2");
            }, 4000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "");
            }, 5000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "0.4");
                if (generatedArray[2] === 0) {
                    alertGreen.play();
                } else if (generatedArray[2] === 1) {
                    alertRed.play();
                } else if (generatedArray[2] === 2) {
                    alertYellow.play();
                } else if (generatedArray[2] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 3");
            }, 6000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "");
            }, 7000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "0.4");
                if (generatedArray[3] === 0) {
                    alertGreen.play();
                } else if (generatedArray[3] === 1) {
                    alertRed.play();
                } else if (generatedArray[3] === 2) {
                    alertYellow.play();
                } else if (generatedArray[3] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 4");
            }, 8000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "");
            }, 9000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "0.4");
                if (generatedArray[4] === 0) {
                    alertGreen.play();
                } else if (generatedArray[4] === 1) {
                    alertRed.play();
                } else if (generatedArray[4] === 2) {
                    alertYellow.play();
                } else if (generatedArray[4] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 5");
            }, 10000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "");
            }, 11000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "0.4");
                if (generatedArray[5] === 0) {
                    alertGreen.play();
                } else if (generatedArray[5] === 1) {
                    alertRed.play();
                } else if (generatedArray[5] === 2) {
                    alertYellow.play();
                } else if (generatedArray[5] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 6");
            }, 12000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "");
            }, 13000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "0.4");
                if (generatedArray[6] === 0) {
                    alertGreen.play();
                } else if (generatedArray[6] === 1) {
                    alertRed.play();
                } else if (generatedArray[6] === 2) {
                    alertYellow.play();
                } else if (generatedArray[6] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 7");
            }, 14000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "");
            }, 15000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "0.4");
                if (generatedArray[7] === 0) {
                    alertGreen.play();
                } else if (generatedArray[7] === 1) {
                    alertRed.play();
                } else if (generatedArray[7] === 2) {
                    alertYellow.play();
                } else if (generatedArray[7] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 8");
            }, 16000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "");
            }, 17000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "0.4");
                if (generatedArray[8] === 0) {
                    alertGreen.play();
                } else if (generatedArray[8] === 1) {
                    alertRed.play();
                } else if (generatedArray[8] === 2) {
                    alertYellow.play();
                } else if (generatedArray[8] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 9");
            }, 18000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "");
            }, 19000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "0.4");
                if (generatedArray[9] === 0) {
                    alertGreen.play();
                } else if (generatedArray[9] === 1) {
                    alertRed.play();
                } else if (generatedArray[9] === 2) {
                    alertYellow.play();
                } else if (generatedArray[9] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 10");
            }, 20000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "");
            }, 21000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "0.4");
                if (generatedArray[10] === 0) {
                    alertGreen.play();
                } else if (generatedArray[10] === 1) {
                    alertRed.play();
                } else if (generatedArray[10] === 2) {
                    alertYellow.play();
                } else if (generatedArray[10] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 11");
            }, 22000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "");
            }, 23000);
            setTimeout(function () {
                $("#" + generatedArray[11]).css("opacity", "0.4");
                if (generatedArray[11] === 0) {
                    alertGreen.play();
                } else if (generatedArray[11] === 1) {
                    alertRed.play();
                } else if (generatedArray[11] === 2) {
                    alertYellow.play();
                } else if (generatedArray[11] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 12");
                if (pushToArray.length === 11) {
                    pushToArray.push(generatedArray[11]);
                }
            }, 24000);
            setTimeout(function () {
                $("#" + generatedArray[11]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 25000);

        } else if (count === 13) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 1");
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
            }, 3000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "0.4");
                if (generatedArray[1] === 0) {
                    alertGreen.play();
                } else if (generatedArray[1] === 1) {
                    alertRed.play();
                } else if (generatedArray[1] === 2) {
                    alertYellow.play();
                } else if (generatedArray[1] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 2");
            }, 4000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "");
            }, 5000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "0.4");
                if (generatedArray[2] === 0) {
                    alertGreen.play();
                } else if (generatedArray[2] === 1) {
                    alertRed.play();
                } else if (generatedArray[2] === 2) {
                    alertYellow.play();
                } else if (generatedArray[2] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 3");
            }, 6000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "");
            }, 7000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "0.4");
                if (generatedArray[3] === 0) {
                    alertGreen.play();
                } else if (generatedArray[3] === 1) {
                    alertRed.play();
                } else if (generatedArray[3] === 2) {
                    alertYellow.play();
                } else if (generatedArray[3] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 4");
            }, 8000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "");
            }, 9000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "0.4");
                if (generatedArray[4] === 0) {
                    alertGreen.play();
                } else if (generatedArray[4] === 1) {
                    alertRed.play();
                } else if (generatedArray[4] === 2) {
                    alertYellow.play();
                } else if (generatedArray[4] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 5");
            }, 10000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "");
            }, 11000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "0.4");
                if (generatedArray[5] === 0) {
                    alertGreen.play();
                } else if (generatedArray[5] === 1) {
                    alertRed.play();
                } else if (generatedArray[5] === 2) {
                    alertYellow.play();
                } else if (generatedArray[5] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 6");
            }, 12000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "");
            }, 13000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "0.4");
                if (generatedArray[6] === 0) {
                    alertGreen.play();
                } else if (generatedArray[6] === 1) {
                    alertRed.play();
                } else if (generatedArray[6] === 2) {
                    alertYellow.play();
                } else if (generatedArray[6] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 7");
            }, 14000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "");
            }, 15000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "0.4");
                if (generatedArray[7] === 0) {
                    alertGreen.play();
                } else if (generatedArray[7] === 1) {
                    alertRed.play();
                } else if (generatedArray[7] === 2) {
                    alertYellow.play();
                } else if (generatedArray[7] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 8");
            }, 16000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "");
            }, 17000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "0.4");
                if (generatedArray[8] === 0) {
                    alertGreen.play();
                } else if (generatedArray[8] === 1) {
                    alertRed.play();
                } else if (generatedArray[8] === 2) {
                    alertYellow.play();
                } else if (generatedArray[8] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 9");
            }, 18000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "");
            }, 19000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "0.4");
                if (generatedArray[9] === 0) {
                    alertGreen.play();
                } else if (generatedArray[9] === 1) {
                    alertRed.play();
                } else if (generatedArray[9] === 2) {
                    alertYellow.play();
                } else if (generatedArray[9] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 10");
            }, 20000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "");
            }, 21000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "0.4");
                if (generatedArray[10] === 0) {
                    alertGreen.play();
                } else if (generatedArray[10] === 1) {
                    alertRed.play();
                } else if (generatedArray[10] === 2) {
                    alertYellow.play();
                } else if (generatedArray[10] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 11");
            }, 22000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "");
            }, 23000);
            setTimeout(function () {
                $("#" + generatedArray[11]).css("opacity", "0.4");
                if (generatedArray[11] === 0) {
                    alertGreen.play();
                } else if (generatedArray[11] === 1) {
                    alertRed.play();
                } else if (generatedArray[11] === 2) {
                    alertYellow.play();
                } else if (generatedArray[11] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 12");
            }, 24000);
            setTimeout(function () {
                $("#" + generatedArray[11]).css("opacity", "");
            }, 25000);
            setTimeout(function () {
                $("#" + generatedArray[12]).css("opacity", "0.4");
                if (generatedArray[12] === 0) {
                    alertGreen.play();
                } else if (generatedArray[12] === 1) {
                    alertRed.play();
                } else if (generatedArray[12] === 2) {
                    alertYellow.play();
                } else if (generatedArray[12] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 13");
                if (pushToArray.length === 12) {
                    pushToArray.push(generatedArray[12]);
                }
            }, 26000);
            setTimeout(function () {
                $("#" + generatedArray[12]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 27000);

        } else if (count === 14) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 1");
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
            }, 3000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "0.4");
                if (generatedArray[1] === 0) {
                    alertGreen.play();
                } else if (generatedArray[1] === 1) {
                    alertRed.play();
                } else if (generatedArray[1] === 2) {
                    alertYellow.play();
                } else if (generatedArray[1] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 2");
            }, 4000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "");
            }, 5000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "0.4");
                if (generatedArray[2] === 0) {
                    alertGreen.play();
                } else if (generatedArray[2] === 1) {
                    alertRed.play();
                } else if (generatedArray[2] === 2) {
                    alertYellow.play();
                } else if (generatedArray[2] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 3");
            }, 6000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "");
            }, 7000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "0.4");
                if (generatedArray[3] === 0) {
                    alertGreen.play();
                } else if (generatedArray[3] === 1) {
                    alertRed.play();
                } else if (generatedArray[3] === 2) {
                    alertYellow.play();
                } else if (generatedArray[3] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 4");
            }, 8000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "");
            }, 9000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "0.4");
                if (generatedArray[4] === 0) {
                    alertGreen.play();
                } else if (generatedArray[4] === 1) {
                    alertRed.play();
                } else if (generatedArray[4] === 2) {
                    alertYellow.play();
                } else if (generatedArray[4] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 5");
            }, 10000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "");
            }, 11000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "0.4");
                if (generatedArray[5] === 0) {
                    alertGreen.play();
                } else if (generatedArray[5] === 1) {
                    alertRed.play();
                } else if (generatedArray[5] === 2) {
                    alertYellow.play();
                } else if (generatedArray[5] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 6");
            }, 12000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "");
            }, 13000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "0.4");
                if (generatedArray[6] === 0) {
                    alertGreen.play();
                } else if (generatedArray[6] === 1) {
                    alertRed.play();
                } else if (generatedArray[6] === 2) {
                    alertYellow.play();
                } else if (generatedArray[6] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 7");
            }, 14000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "");
            }, 15000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "0.4");
                if (generatedArray[7] === 0) {
                    alertGreen.play();
                } else if (generatedArray[7] === 1) {
                    alertRed.play();
                } else if (generatedArray[7] === 2) {
                    alertYellow.play();
                } else if (generatedArray[7] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 8");
            }, 16000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "");
            }, 17000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "0.4");
                if (generatedArray[8] === 0) {
                    alertGreen.play();
                } else if (generatedArray[8] === 1) {
                    alertRed.play();
                } else if (generatedArray[8] === 2) {
                    alertYellow.play();
                } else if (generatedArray[8] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 9");
            }, 18000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "");
            }, 19000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "0.4");
                if (generatedArray[9] === 0) {
                    alertGreen.play();
                } else if (generatedArray[9] === 1) {
                    alertRed.play();
                } else if (generatedArray[9] === 2) {
                    alertYellow.play();
                } else if (generatedArray[9] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 10");
            }, 20000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "");
            }, 21000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "0.4");
                if (generatedArray[10] === 0) {
                    alertGreen.play();
                } else if (generatedArray[10] === 1) {
                    alertRed.play();
                } else if (generatedArray[10] === 2) {
                    alertYellow.play();
                } else if (generatedArray[10] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 11");
            }, 22000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "");
            }, 23000);
            setTimeout(function () {
                $("#" + generatedArray[11]).css("opacity", "0.4");
                if (generatedArray[11] === 0) {
                    alertGreen.play();
                } else if (generatedArray[11] === 1) {
                    alertRed.play();
                } else if (generatedArray[11] === 2) {
                    alertYellow.play();
                } else if (generatedArray[11] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 12");
            }, 24000);
            setTimeout(function () {
                $("#" + generatedArray[11]).css("opacity", "");
            }, 25000);
            setTimeout(function () {
                $("#" + generatedArray[12]).css("opacity", "0.4");
                if (generatedArray[12] === 0) {
                    alertGreen.play();
                } else if (generatedArray[12] === 1) {
                    alertRed.play();
                } else if (generatedArray[12] === 2) {
                    alertYellow.play();
                } else if (generatedArray[12] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 13");
            }, 26000);
            setTimeout(function () {
                $("#" + generatedArray[12]).css("opacity", "");
            }, 27000);
            setTimeout(function () {
                $("#" + generatedArray[13]).css("opacity", "0.4");
                if (generatedArray[13] === 0) {
                    alertGreen.play();
                } else if (generatedArray[13] === 1) {
                    alertRed.play();
                } else if (generatedArray[13] === 2) {
                    alertYellow.play();
                } else if (generatedArray[13] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 14");
                if (pushToArray.length === 13) {
                    pushToArray.push(generatedArray[13]);
                }
            }, 28000);
            setTimeout(function () {
                $("#" + generatedArray[13]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 29000);

        } else if (count === 15) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 1");
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
            }, 3000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "0.4");
                if (generatedArray[1] === 0) {
                    alertGreen.play();
                } else if (generatedArray[1] === 1) {
                    alertRed.play();
                } else if (generatedArray[1] === 2) {
                    alertYellow.play();
                } else if (generatedArray[1] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 2");
            }, 4000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "");
            }, 5000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "0.4");
                if (generatedArray[2] === 0) {
                    alertGreen.play();
                } else if (generatedArray[2] === 1) {
                    alertRed.play();
                } else if (generatedArray[2] === 2) {
                    alertYellow.play();
                } else if (generatedArray[2] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 3");
            }, 6000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "");
            }, 7000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "0.4");
                if (generatedArray[3] === 0) {
                    alertGreen.play();
                } else if (generatedArray[3] === 1) {
                    alertRed.play();
                } else if (generatedArray[3] === 2) {
                    alertYellow.play();
                } else if (generatedArray[3] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 4");
            }, 8000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "");
            }, 9000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "0.4");
                if (generatedArray[4] === 0) {
                    alertGreen.play();
                } else if (generatedArray[4] === 1) {
                    alertRed.play();
                } else if (generatedArray[4] === 2) {
                    alertYellow.play();
                } else if (generatedArray[4] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 5");
            }, 10000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "");
            }, 11000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "0.4");
                if (generatedArray[5] === 0) {
                    alertGreen.play();
                } else if (generatedArray[5] === 1) {
                    alertRed.play();
                } else if (generatedArray[5] === 2) {
                    alertYellow.play();
                } else if (generatedArray[5] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 6");
            }, 12000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "");
            }, 13000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "0.4");
                if (generatedArray[6] === 0) {
                    alertGreen.play();
                } else if (generatedArray[6] === 1) {
                    alertRed.play();
                } else if (generatedArray[6] === 2) {
                    alertYellow.play();
                } else if (generatedArray[6] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 7");
            }, 14000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "");
            }, 15000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "0.4");
                if (generatedArray[7] === 0) {
                    alertGreen.play();
                } else if (generatedArray[7] === 1) {
                    alertRed.play();
                } else if (generatedArray[7] === 2) {
                    alertYellow.play();
                } else if (generatedArray[7] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 8");
            }, 16000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "");
            }, 17000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "0.4");
                if (generatedArray[8] === 0) {
                    alertGreen.play();
                } else if (generatedArray[8] === 1) {
                    alertRed.play();
                } else if (generatedArray[8] === 2) {
                    alertYellow.play();
                } else if (generatedArray[8] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 9");
            }, 18000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "");
            }, 19000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "0.4");
                if (generatedArray[9] === 0) {
                    alertGreen.play();
                } else if (generatedArray[9] === 1) {
                    alertRed.play();
                } else if (generatedArray[9] === 2) {
                    alertYellow.play();
                } else if (generatedArray[9] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 10");
            }, 20000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "");
            }, 21000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "0.4");
                if (generatedArray[10] === 0) {
                    alertGreen.play();
                } else if (generatedArray[10] === 1) {
                    alertRed.play();
                } else if (generatedArray[10] === 2) {
                    alertYellow.play();
                } else if (generatedArray[10] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 11");
            }, 22000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "");
            }, 23000);
            setTimeout(function () {
                $("#" + generatedArray[11]).css("opacity", "0.4");
                if (generatedArray[11] === 0) {
                    alertGreen.play();
                } else if (generatedArray[11] === 1) {
                    alertRed.play();
                } else if (generatedArray[11] === 2) {
                    alertYellow.play();
                } else if (generatedArray[11] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 12");
            }, 24000);
            setTimeout(function () {
                $("#" + generatedArray[11]).css("opacity", "");
            }, 25000);
            setTimeout(function () {
                $("#" + generatedArray[12]).css("opacity", "0.4");
                if (generatedArray[12] === 0) {
                    alertGreen.play();
                } else if (generatedArray[12] === 1) {
                    alertRed.play();
                } else if (generatedArray[12] === 2) {
                    alertYellow.play();
                } else if (generatedArray[12] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 13");
            }, 26000);
            setTimeout(function () {
                $("#" + generatedArray[12]).css("opacity", "");
            }, 27000);
            setTimeout(function () {
                $("#" + generatedArray[13]).css("opacity", "0.4");
                if (generatedArray[13] === 0) {
                    alertGreen.play();
                } else if (generatedArray[13] === 1) {
                    alertRed.play();
                } else if (generatedArray[13] === 2) {
                    alertYellow.play();
                } else if (generatedArray[13] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 14");
            }, 28000);
            setTimeout(function () {
                $("#" + generatedArray[13]).css("opacity", "");
            }, 29000);
            setTimeout(function () {
                $("#" + generatedArray[14]).css("opacity", "0.4");
                if (generatedArray[14] === 0) {
                    alertGreen.play();
                } else if (generatedArray[14] === 1) {
                    alertRed.play();
                } else if (generatedArray[14] === 2) {
                    alertYellow.play();
                } else if (generatedArray[14] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 15");
                if (pushToArray.length === 14) {
                    pushToArray.push(generatedArray[14]);
                }
            }, 30000);
            setTimeout(function () {
                $("#" + generatedArray[14]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 31000);

        } else if (count === 16) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 1");
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
            }, 3000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "0.4");
                if (generatedArray[1] === 0) {
                    alertGreen.play();
                } else if (generatedArray[1] === 1) {
                    alertRed.play();
                } else if (generatedArray[1] === 2) {
                    alertYellow.play();
                } else if (generatedArray[1] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 2");
            }, 4000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "");
            }, 5000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "0.4");
                if (generatedArray[2] === 0) {
                    alertGreen.play();
                } else if (generatedArray[2] === 1) {
                    alertRed.play();
                } else if (generatedArray[2] === 2) {
                    alertYellow.play();
                } else if (generatedArray[2] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 3");
            }, 6000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "");
            }, 7000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "0.4");
                if (generatedArray[3] === 0) {
                    alertGreen.play();
                } else if (generatedArray[3] === 1) {
                    alertRed.play();
                } else if (generatedArray[3] === 2) {
                    alertYellow.play();
                } else if (generatedArray[3] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 4");
            }, 8000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "");
            }, 9000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "0.4");
                if (generatedArray[4] === 0) {
                    alertGreen.play();
                } else if (generatedArray[4] === 1) {
                    alertRed.play();
                } else if (generatedArray[4] === 2) {
                    alertYellow.play();
                } else if (generatedArray[4] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 5");
            }, 10000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "");
            }, 11000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "0.4");
                if (generatedArray[5] === 0) {
                    alertGreen.play();
                } else if (generatedArray[5] === 1) {
                    alertRed.play();
                } else if (generatedArray[5] === 2) {
                    alertYellow.play();
                } else if (generatedArray[5] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 6");
            }, 12000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "");
            }, 13000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "0.4");
                if (generatedArray[6] === 0) {
                    alertGreen.play();
                } else if (generatedArray[6] === 1) {
                    alertRed.play();
                } else if (generatedArray[6] === 2) {
                    alertYellow.play();
                } else if (generatedArray[6] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 7");
            }, 14000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "");
            }, 15000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "0.4");
                if (generatedArray[7] === 0) {
                    alertGreen.play();
                } else if (generatedArray[7] === 1) {
                    alertRed.play();
                } else if (generatedArray[7] === 2) {
                    alertYellow.play();
                } else if (generatedArray[7] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 8");
            }, 16000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "");
            }, 17000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "0.4");
                if (generatedArray[8] === 0) {
                    alertGreen.play();
                } else if (generatedArray[8] === 1) {
                    alertRed.play();
                } else if (generatedArray[8] === 2) {
                    alertYellow.play();
                } else if (generatedArray[8] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 9");
            }, 18000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "");
            }, 19000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "0.4");
                if (generatedArray[9] === 0) {
                    alertGreen.play();
                } else if (generatedArray[9] === 1) {
                    alertRed.play();
                } else if (generatedArray[9] === 2) {
                    alertYellow.play();
                } else if (generatedArray[9] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 10");
            }, 20000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "");
            }, 21000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "0.4");
                if (generatedArray[10] === 0) {
                    alertGreen.play();
                } else if (generatedArray[10] === 1) {
                    alertRed.play();
                } else if (generatedArray[10] === 2) {
                    alertYellow.play();
                } else if (generatedArray[10] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 11");
            }, 22000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "");
            }, 23000);
            setTimeout(function () {
                $("#" + generatedArray[11]).css("opacity", "0.4");
                if (generatedArray[11] === 0) {
                    alertGreen.play();
                } else if (generatedArray[11] === 1) {
                    alertRed.play();
                } else if (generatedArray[11] === 2) {
                    alertYellow.play();
                } else if (generatedArray[11] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 12");
            }, 24000);
            setTimeout(function () {
                $("#" + generatedArray[11]).css("opacity", "");
            }, 25000);
            setTimeout(function () {
                $("#" + generatedArray[12]).css("opacity", "0.4");
                if (generatedArray[12] === 0) {
                    alertGreen.play();
                } else if (generatedArray[12] === 1) {
                    alertRed.play();
                } else if (generatedArray[12] === 2) {
                    alertYellow.play();
                } else if (generatedArray[12] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 13");
            }, 26000);
            setTimeout(function () {
                $("#" + generatedArray[12]).css("opacity", "");
            }, 27000);
            setTimeout(function () {
                $("#" + generatedArray[13]).css("opacity", "0.4");
                if (generatedArray[13] === 0) {
                    alertGreen.play();
                } else if (generatedArray[13] === 1) {
                    alertRed.play();
                } else if (generatedArray[13] === 2) {
                    alertYellow.play();
                } else if (generatedArray[13] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 14");
            }, 28000);
            setTimeout(function () {
                $("#" + generatedArray[13]).css("opacity", "");
            }, 29000);
            setTimeout(function () {
                $("#" + generatedArray[14]).css("opacity", "0.4");
                if (generatedArray[14] === 0) {
                    alertGreen.play();
                } else if (generatedArray[14] === 1) {
                    alertRed.play();
                } else if (generatedArray[14] === 2) {
                    alertYellow.play();
                } else if (generatedArray[14] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 15");
            }, 30000);
            setTimeout(function () {
                $("#" + generatedArray[14]).css("opacity", "");
            }, 31000);
            setTimeout(function () {
                $("#" + generatedArray[15]).css("opacity", "0.4");
                if (generatedArray[15] === 0) {
                    alertGreen.play();
                } else if (generatedArray[15] === 1) {
                    alertRed.play();
                } else if (generatedArray[15] === 2) {
                    alertYellow.play();
                } else if (generatedArray[15] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 16");
                if (pushToArray.length === 15) {
                    pushToArray.push(generatedArray[15]);
                }
            }, 32000);
            setTimeout(function () {
                $("#" + generatedArray[15]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 33000);

        } else if (count === 17) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 1");
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
            }, 3000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "0.4");
                if (generatedArray[1] === 0) {
                    alertGreen.play();
                } else if (generatedArray[1] === 1) {
                    alertRed.play();
                } else if (generatedArray[1] === 2) {
                    alertYellow.play();
                } else if (generatedArray[1] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 2");
            }, 4000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "");
            }, 5000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "0.4");
                if (generatedArray[2] === 0) {
                    alertGreen.play();
                } else if (generatedArray[2] === 1) {
                    alertRed.play();
                } else if (generatedArray[2] === 2) {
                    alertYellow.play();
                } else if (generatedArray[2] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 3");
            }, 6000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "");
            }, 7000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "0.4");
                if (generatedArray[3] === 0) {
                    alertGreen.play();
                } else if (generatedArray[3] === 1) {
                    alertRed.play();
                } else if (generatedArray[3] === 2) {
                    alertYellow.play();
                } else if (generatedArray[3] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 4");
            }, 8000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "");
            }, 9000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "0.4");
                if (generatedArray[4] === 0) {
                    alertGreen.play();
                } else if (generatedArray[4] === 1) {
                    alertRed.play();
                } else if (generatedArray[4] === 2) {
                    alertYellow.play();
                } else if (generatedArray[4] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 5");
            }, 10000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "");
            }, 11000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "0.4");
                if (generatedArray[5] === 0) {
                    alertGreen.play();
                } else if (generatedArray[5] === 1) {
                    alertRed.play();
                } else if (generatedArray[5] === 2) {
                    alertYellow.play();
                } else if (generatedArray[5] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 6");
            }, 12000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "");
            }, 13000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "0.4");
                if (generatedArray[6] === 0) {
                    alertGreen.play();
                } else if (generatedArray[6] === 1) {
                    alertRed.play();
                } else if (generatedArray[6] === 2) {
                    alertYellow.play();
                } else if (generatedArray[6] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 7");
            }, 14000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "");
            }, 15000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "0.4");
                if (generatedArray[7] === 0) {
                    alertGreen.play();
                } else if (generatedArray[7] === 1) {
                    alertRed.play();
                } else if (generatedArray[7] === 2) {
                    alertYellow.play();
                } else if (generatedArray[7] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 8");
            }, 16000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "");
            }, 17000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "0.4");
                if (generatedArray[8] === 0) {
                    alertGreen.play();
                } else if (generatedArray[8] === 1) {
                    alertRed.play();
                } else if (generatedArray[8] === 2) {
                    alertYellow.play();
                } else if (generatedArray[8] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 9");
            }, 18000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "");
            }, 19000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "0.4");
                if (generatedArray[9] === 0) {
                    alertGreen.play();
                } else if (generatedArray[9] === 1) {
                    alertRed.play();
                } else if (generatedArray[9] === 2) {
                    alertYellow.play();
                } else if (generatedArray[9] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 10");
            }, 20000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "");
            }, 21000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "0.4");
                if (generatedArray[10] === 0) {
                    alertGreen.play();
                } else if (generatedArray[10] === 1) {
                    alertRed.play();
                } else if (generatedArray[10] === 2) {
                    alertYellow.play();
                } else if (generatedArray[10] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 11");
            }, 22000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "");
            }, 23000);
            setTimeout(function () {
                $("#" + generatedArray[11]).css("opacity", "0.4");
                if (generatedArray[11] === 0) {
                    alertGreen.play();
                } else if (generatedArray[11] === 1) {
                    alertRed.play();
                } else if (generatedArray[11] === 2) {
                    alertYellow.play();
                } else if (generatedArray[11] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 12");
            }, 24000);
            setTimeout(function () {
                $("#" + generatedArray[11]).css("opacity", "");
            }, 25000);
            setTimeout(function () {
                $("#" + generatedArray[12]).css("opacity", "0.4");
                if (generatedArray[12] === 0) {
                    alertGreen.play();
                } else if (generatedArray[12] === 1) {
                    alertRed.play();
                } else if (generatedArray[12] === 2) {
                    alertYellow.play();
                } else if (generatedArray[12] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 13");
            }, 26000);
            setTimeout(function () {
                $("#" + generatedArray[12]).css("opacity", "");
            }, 27000);
            setTimeout(function () {
                $("#" + generatedArray[13]).css("opacity", "0.4");
                if (generatedArray[13] === 0) {
                    alertGreen.play();
                } else if (generatedArray[13] === 1) {
                    alertRed.play();
                } else if (generatedArray[13] === 2) {
                    alertYellow.play();
                } else if (generatedArray[13] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 14");
            }, 28000);
            setTimeout(function () {
                $("#" + generatedArray[13]).css("opacity", "");
            }, 29000);
            setTimeout(function () {
                $("#" + generatedArray[14]).css("opacity", "0.4");
                if (generatedArray[14] === 0) {
                    alertGreen.play();
                } else if (generatedArray[14] === 1) {
                    alertRed.play();
                } else if (generatedArray[14] === 2) {
                    alertYellow.play();
                } else if (generatedArray[14] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 15");
            }, 30000);
            setTimeout(function () {
                $("#" + generatedArray[14]).css("opacity", "");
            }, 31000);
            setTimeout(function () {
                $("#" + generatedArray[15]).css("opacity", "0.4");
                if (generatedArray[15] === 0) {
                    alertGreen.play();
                } else if (generatedArray[15] === 1) {
                    alertRed.play();
                } else if (generatedArray[15] === 2) {
                    alertYellow.play();
                } else if (generatedArray[15] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 16");
            }, 32000);
            setTimeout(function () {
                $("#" + generatedArray[15]).css("opacity", "");
            }, 33000);
            setTimeout(function () {
                $("#" + generatedArray[16]).css("opacity", "0.4");
                if (generatedArray[16] === 0) {
                    alertGreen.play();
                } else if (generatedArray[16] === 1) {
                    alertRed.play();
                } else if (generatedArray[16] === 2) {
                    alertYellow.play();
                } else if (generatedArray[16] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 17");
                if (pushToArray.length === 16) {
                    pushToArray.push(generatedArray[16]);
                }
            }, 34000);
            setTimeout(function () {
                $("#" + generatedArray[16]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 35000);

        } else if (count === 18) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 1");
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
            }, 3000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "0.4");
                if (generatedArray[1] === 0) {
                    alertGreen.play();
                } else if (generatedArray[1] === 1) {
                    alertRed.play();
                } else if (generatedArray[1] === 2) {
                    alertYellow.play();
                } else if (generatedArray[1] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 2");
            }, 4000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "");
            }, 5000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "0.4");
                if (generatedArray[2] === 0) {
                    alertGreen.play();
                } else if (generatedArray[2] === 1) {
                    alertRed.play();
                } else if (generatedArray[2] === 2) {
                    alertYellow.play();
                } else if (generatedArray[2] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 3");
            }, 6000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "");
            }, 7000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "0.4");
                if (generatedArray[3] === 0) {
                    alertGreen.play();
                } else if (generatedArray[3] === 1) {
                    alertRed.play();
                } else if (generatedArray[3] === 2) {
                    alertYellow.play();
                } else if (generatedArray[3] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 4");
            }, 8000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "");
            }, 9000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "0.4");
                if (generatedArray[4] === 0) {
                    alertGreen.play();
                } else if (generatedArray[4] === 1) {
                    alertRed.play();
                } else if (generatedArray[4] === 2) {
                    alertYellow.play();
                } else if (generatedArray[4] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 5");
            }, 10000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "");
            }, 11000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "0.4");
                if (generatedArray[5] === 0) {
                    alertGreen.play();
                } else if (generatedArray[5] === 1) {
                    alertRed.play();
                } else if (generatedArray[5] === 2) {
                    alertYellow.play();
                } else if (generatedArray[5] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 6");
            }, 12000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "");
            }, 13000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "0.4");
                if (generatedArray[6] === 0) {
                    alertGreen.play();
                } else if (generatedArray[6] === 1) {
                    alertRed.play();
                } else if (generatedArray[6] === 2) {
                    alertYellow.play();
                } else if (generatedArray[6] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 7");
            }, 14000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "");
            }, 15000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "0.4");
                if (generatedArray[7] === 0) {
                    alertGreen.play();
                } else if (generatedArray[7] === 1) {
                    alertRed.play();
                } else if (generatedArray[7] === 2) {
                    alertYellow.play();
                } else if (generatedArray[7] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 8");
            }, 16000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "");
            }, 17000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "0.4");
                if (generatedArray[8] === 0) {
                    alertGreen.play();
                } else if (generatedArray[8] === 1) {
                    alertRed.play();
                } else if (generatedArray[8] === 2) {
                    alertYellow.play();
                } else if (generatedArray[8] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 9");
            }, 18000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "");
            }, 19000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "0.4");
                if (generatedArray[9] === 0) {
                    alertGreen.play();
                } else if (generatedArray[9] === 1) {
                    alertRed.play();
                } else if (generatedArray[9] === 2) {
                    alertYellow.play();
                } else if (generatedArray[9] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 10");
            }, 20000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "");
            }, 21000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "0.4");
                if (generatedArray[10] === 0) {
                    alertGreen.play();
                } else if (generatedArray[10] === 1) {
                    alertRed.play();
                } else if (generatedArray[10] === 2) {
                    alertYellow.play();
                } else if (generatedArray[10] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 11");
            }, 22000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "");
            }, 23000);
            setTimeout(function () {
                $("#" + generatedArray[11]).css("opacity", "0.4");
                if (generatedArray[11] === 0) {
                    alertGreen.play();
                } else if (generatedArray[11] === 1) {
                    alertRed.play();
                } else if (generatedArray[11] === 2) {
                    alertYellow.play();
                } else if (generatedArray[11] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 12");
            }, 24000);
            setTimeout(function () {
                $("#" + generatedArray[11]).css("opacity", "");
            }, 25000);
            setTimeout(function () {
                $("#" + generatedArray[12]).css("opacity", "0.4");
                if (generatedArray[12] === 0) {
                    alertGreen.play();
                } else if (generatedArray[12] === 1) {
                    alertRed.play();
                } else if (generatedArray[12] === 2) {
                    alertYellow.play();
                } else if (generatedArray[12] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 13");
            }, 26000);
            setTimeout(function () {
                $("#" + generatedArray[12]).css("opacity", "");
            }, 27000);
            setTimeout(function () {
                $("#" + generatedArray[13]).css("opacity", "0.4");
                if (generatedArray[13] === 0) {
                    alertGreen.play();
                } else if (generatedArray[13] === 1) {
                    alertRed.play();
                } else if (generatedArray[13] === 2) {
                    alertYellow.play();
                } else if (generatedArray[13] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 14");
            }, 28000);
            setTimeout(function () {
                $("#" + generatedArray[13]).css("opacity", "");
            }, 29000);
            setTimeout(function () {
                $("#" + generatedArray[14]).css("opacity", "0.4");
                if (generatedArray[14] === 0) {
                    alertGreen.play();
                } else if (generatedArray[14] === 1) {
                    alertRed.play();
                } else if (generatedArray[14] === 2) {
                    alertYellow.play();
                } else if (generatedArray[14] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 15");
            }, 30000);
            setTimeout(function () {
                $("#" + generatedArray[14]).css("opacity", "");
            }, 31000);
            setTimeout(function () {
                $("#" + generatedArray[15]).css("opacity", "0.4");
                if (generatedArray[15] === 0) {
                    alertGreen.play();
                } else if (generatedArray[15] === 1) {
                    alertRed.play();
                } else if (generatedArray[15] === 2) {
                    alertYellow.play();
                } else if (generatedArray[15] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 16");
            }, 32000);
            setTimeout(function () {
                $("#" + generatedArray[15]).css("opacity", "");
            }, 33000);
            setTimeout(function () {
                $("#" + generatedArray[16]).css("opacity", "0.4");
                if (generatedArray[16] === 0) {
                    alertGreen.play();
                } else if (generatedArray[16] === 1) {
                    alertRed.play();
                } else if (generatedArray[16] === 2) {
                    alertYellow.play();
                } else if (generatedArray[16] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 17");
            }, 34000);
            setTimeout(function () {
                $("#" + generatedArray[16]).css("opacity", "");
            }, 35000);
            setTimeout(function () {
                $("#" + generatedArray[17]).css("opacity", "0.4");
                if (generatedArray[17] === 0) {
                    alertGreen.play();
                } else if (generatedArray[17] === 1) {
                    alertRed.play();
                } else if (generatedArray[17] === 2) {
                    alertYellow.play();
                } else if (generatedArray[17] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 18");
                if (pushToArray.length === 17) {
                    pushToArray.push(generatedArray[17]);
                }
            }, 36000);
            setTimeout(function () {
                $("#" + generatedArray[17]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 37000);

        } else if (count === 19) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 1");
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
            }, 3000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "0.4");
                if (generatedArray[1] === 0) {
                    alertGreen.play();
                } else if (generatedArray[1] === 1) {
                    alertRed.play();
                } else if (generatedArray[1] === 2) {
                    alertYellow.play();
                } else if (generatedArray[1] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 2");
            }, 4000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "");
            }, 5000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "0.4");
                if (generatedArray[2] === 0) {
                    alertGreen.play();
                } else if (generatedArray[2] === 1) {
                    alertRed.play();
                } else if (generatedArray[2] === 2) {
                    alertYellow.play();
                } else if (generatedArray[2] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 3");
            }, 6000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "");
            }, 7000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "0.4");
                if (generatedArray[3] === 0) {
                    alertGreen.play();
                } else if (generatedArray[3] === 1) {
                    alertRed.play();
                } else if (generatedArray[3] === 2) {
                    alertYellow.play();
                } else if (generatedArray[3] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 4");
            }, 8000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "");
            }, 9000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "0.4");
                if (generatedArray[4] === 0) {
                    alertGreen.play();
                } else if (generatedArray[4] === 1) {
                    alertRed.play();
                } else if (generatedArray[4] === 2) {
                    alertYellow.play();
                } else if (generatedArray[4] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 5");
            }, 10000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "");
            }, 11000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "0.4");
                if (generatedArray[5] === 0) {
                    alertGreen.play();
                } else if (generatedArray[5] === 1) {
                    alertRed.play();
                } else if (generatedArray[5] === 2) {
                    alertYellow.play();
                } else if (generatedArray[5] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 6");
            }, 12000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "");
            }, 13000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "0.4");
                if (generatedArray[6] === 0) {
                    alertGreen.play();
                } else if (generatedArray[6] === 1) {
                    alertRed.play();
                } else if (generatedArray[6] === 2) {
                    alertYellow.play();
                } else if (generatedArray[6] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 7");
            }, 14000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "");
            }, 15000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "0.4");
                if (generatedArray[7] === 0) {
                    alertGreen.play();
                } else if (generatedArray[7] === 1) {
                    alertRed.play();
                } else if (generatedArray[7] === 2) {
                    alertYellow.play();
                } else if (generatedArray[7] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 8");
            }, 16000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "");
            }, 17000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "0.4");
                if (generatedArray[8] === 0) {
                    alertGreen.play();
                } else if (generatedArray[8] === 1) {
                    alertRed.play();
                } else if (generatedArray[8] === 2) {
                    alertYellow.play();
                } else if (generatedArray[8] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 9");
            }, 18000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "");
            }, 19000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "0.4");
                if (generatedArray[9] === 0) {
                    alertGreen.play();
                } else if (generatedArray[9] === 1) {
                    alertRed.play();
                } else if (generatedArray[9] === 2) {
                    alertYellow.play();
                } else if (generatedArray[9] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 10");
            }, 20000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "");
            }, 21000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "0.4");
                if (generatedArray[10] === 0) {
                    alertGreen.play();
                } else if (generatedArray[10] === 1) {
                    alertRed.play();
                } else if (generatedArray[10] === 2) {
                    alertYellow.play();
                } else if (generatedArray[10] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 11");
            }, 22000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "");
            }, 23000);
            setTimeout(function () {
                $("#" + generatedArray[11]).css("opacity", "0.4");
                if (generatedArray[11] === 0) {
                    alertGreen.play();
                } else if (generatedArray[11] === 1) {
                    alertRed.play();
                } else if (generatedArray[11] === 2) {
                    alertYellow.play();
                } else if (generatedArray[11] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 12");
            }, 24000);
            setTimeout(function () {
                $("#" + generatedArray[11]).css("opacity", "");
            }, 25000);
            setTimeout(function () {
                $("#" + generatedArray[12]).css("opacity", "0.4");
                if (generatedArray[12] === 0) {
                    alertGreen.play();
                } else if (generatedArray[12] === 1) {
                    alertRed.play();
                } else if (generatedArray[12] === 2) {
                    alertYellow.play();
                } else if (generatedArray[12] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 13");
            }, 26000);
            setTimeout(function () {
                $("#" + generatedArray[12]).css("opacity", "");
            }, 27000);
            setTimeout(function () {
                $("#" + generatedArray[13]).css("opacity", "0.4");
                if (generatedArray[13] === 0) {
                    alertGreen.play();
                } else if (generatedArray[13] === 1) {
                    alertRed.play();
                } else if (generatedArray[13] === 2) {
                    alertYellow.play();
                } else if (generatedArray[13] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 14");
            }, 28000);
            setTimeout(function () {
                $("#" + generatedArray[13]).css("opacity", "");
            }, 29000);
            setTimeout(function () {
                $("#" + generatedArray[14]).css("opacity", "0.4");
                if (generatedArray[14] === 0) {
                    alertGreen.play();
                } else if (generatedArray[14] === 1) {
                    alertRed.play();
                } else if (generatedArray[14] === 2) {
                    alertYellow.play();
                } else if (generatedArray[14] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 15");
            }, 30000);
            setTimeout(function () {
                $("#" + generatedArray[14]).css("opacity", "");
            }, 31000);
            setTimeout(function () {
                $("#" + generatedArray[15]).css("opacity", "0.4");
                if (generatedArray[15] === 0) {
                    alertGreen.play();
                } else if (generatedArray[15] === 1) {
                    alertRed.play();
                } else if (generatedArray[15] === 2) {
                    alertYellow.play();
                } else if (generatedArray[15] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 16");
            }, 32000);
            setTimeout(function () {
                $("#" + generatedArray[15]).css("opacity", "");
            }, 33000);
            setTimeout(function () {
                $("#" + generatedArray[16]).css("opacity", "0.4");
                if (generatedArray[16] === 0) {
                    alertGreen.play();
                } else if (generatedArray[16] === 1) {
                    alertRed.play();
                } else if (generatedArray[16] === 2) {
                    alertYellow.play();
                } else if (generatedArray[16] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 17");
            }, 34000);
            setTimeout(function () {
                $("#" + generatedArray[16]).css("opacity", "");
            }, 35000);
            setTimeout(function () {
                $("#" + generatedArray[17]).css("opacity", "0.4");
                if (generatedArray[17] === 0) {
                    alertGreen.play();
                } else if (generatedArray[17] === 1) {
                    alertRed.play();
                } else if (generatedArray[17] === 2) {
                    alertYellow.play();
                } else if (generatedArray[17] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 18");
            }, 36000);
            setTimeout(function () {
                $("#" + generatedArray[17]).css("opacity", "");
            }, 37000);
            setTimeout(function () {
                $("#" + generatedArray[18]).css("opacity", "0.4");
                if (generatedArray[17] === 0) {
                    alertGreen.play();
                } else if (generatedArray[18] === 1) {
                    alertRed.play();
                } else if (generatedArray[18] === 2) {
                    alertYellow.play();
                } else if (generatedArray[18] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 19");
                if (pushToArray.length === 18) {
                    pushToArray.push(generatedArray[18]);
                }
            }, 38000);
            setTimeout(function () {
                $("#" + generatedArray[18]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 39000);

        } else if (count === 20) {
            setTimeout(function () {
                correct = false;
                clickedArray = [];
                $("#" + generatedArray[0]).css("opacity", "0.4");
                if (generatedArray[0] === 0) {
                    alertGreen.play();
                } else if (generatedArray[0] === 1) {
                    alertRed.play();
                } else if (generatedArray[0] === 2) {
                    alertYellow.play();
                } else if (generatedArray[0] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 1");
            }, 2000);
            setTimeout(function () {
                $("#" + generatedArray[0]).css("opacity", "");
            }, 3000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "0.4");
                if (generatedArray[1] === 0) {
                    alertGreen.play();
                } else if (generatedArray[1] === 1) {
                    alertRed.play();
                } else if (generatedArray[1] === 2) {
                    alertYellow.play();
                } else if (generatedArray[1] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 2");
            }, 4000);
            setTimeout(function () {
                $("#" + generatedArray[1]).css("opacity", "");
            }, 5000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "0.4");
                if (generatedArray[2] === 0) {
                    alertGreen.play();
                } else if (generatedArray[2] === 1) {
                    alertRed.play();
                } else if (generatedArray[2] === 2) {
                    alertYellow.play();
                } else if (generatedArray[2] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 3");
            }, 6000);
            setTimeout(function () {
                $("#" + generatedArray[2]).css("opacity", "");
            }, 7000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "0.4");
                if (generatedArray[3] === 0) {
                    alertGreen.play();
                } else if (generatedArray[3] === 1) {
                    alertRed.play();
                } else if (generatedArray[3] === 2) {
                    alertYellow.play();
                } else if (generatedArray[3] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 4");
            }, 8000);
            setTimeout(function () {
                $("#" + generatedArray[3]).css("opacity", "");
            }, 9000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "0.4");
                if (generatedArray[4] === 0) {
                    alertGreen.play();
                } else if (generatedArray[4] === 1) {
                    alertRed.play();
                } else if (generatedArray[4] === 2) {
                    alertYellow.play();
                } else if (generatedArray[4] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 5");
            }, 10000);
            setTimeout(function () {
                $("#" + generatedArray[4]).css("opacity", "");
            }, 11000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "0.4");
                if (generatedArray[5] === 0) {
                    alertGreen.play();
                } else if (generatedArray[5] === 1) {
                    alertRed.play();
                } else if (generatedArray[5] === 2) {
                    alertYellow.play();
                } else if (generatedArray[5] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 6");
            }, 12000);
            setTimeout(function () {
                $("#" + generatedArray[5]).css("opacity", "");
            }, 13000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "0.4");
                if (generatedArray[6] === 0) {
                    alertGreen.play();
                } else if (generatedArray[6] === 1) {
                    alertRed.play();
                } else if (generatedArray[6] === 2) {
                    alertYellow.play();
                } else if (generatedArray[6] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 7");
            }, 14000);
            setTimeout(function () {
                $("#" + generatedArray[6]).css("opacity", "");
            }, 15000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "0.4");
                if (generatedArray[7] === 0) {
                    alertGreen.play();
                } else if (generatedArray[7] === 1) {
                    alertRed.play();
                } else if (generatedArray[7] === 2) {
                    alertYellow.play();
                } else if (generatedArray[7] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 8");
            }, 16000);
            setTimeout(function () {
                $("#" + generatedArray[7]).css("opacity", "");
            }, 17000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "0.4");
                if (generatedArray[8] === 0) {
                    alertGreen.play();
                } else if (generatedArray[8] === 1) {
                    alertRed.play();
                } else if (generatedArray[8] === 2) {
                    alertYellow.play();
                } else if (generatedArray[8] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 9");
            }, 18000);
            setTimeout(function () {
                $("#" + generatedArray[8]).css("opacity", "");
            }, 19000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "0.4");
                if (generatedArray[9] === 0) {
                    alertGreen.play();
                } else if (generatedArray[9] === 1) {
                    alertRed.play();
                } else if (generatedArray[9] === 2) {
                    alertYellow.play();
                } else if (generatedArray[9] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 10");
            }, 20000);
            setTimeout(function () {
                $("#" + generatedArray[9]).css("opacity", "");
            }, 21000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "0.4");
                if (generatedArray[10] === 0) {
                    alertGreen.play();
                } else if (generatedArray[10] === 1) {
                    alertRed.play();
                } else if (generatedArray[10] === 2) {
                    alertYellow.play();
                } else if (generatedArray[10] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 11");
            }, 22000);
            setTimeout(function () {
                $("#" + generatedArray[10]).css("opacity", "");
            }, 23000);
            setTimeout(function () {
                $("#" + generatedArray[11]).css("opacity", "0.4");
                if (generatedArray[11] === 0) {
                    alertGreen.play();
                } else if (generatedArray[11] === 1) {
                    alertRed.play();
                } else if (generatedArray[11] === 2) {
                    alertYellow.play();
                } else if (generatedArray[11] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 12");
            }, 24000);
            setTimeout(function () {
                $("#" + generatedArray[11]).css("opacity", "");
            }, 25000);
            setTimeout(function () {
                $("#" + generatedArray[12]).css("opacity", "0.4");
                if (generatedArray[12] === 0) {
                    alertGreen.play();
                } else if (generatedArray[12] === 1) {
                    alertRed.play();
                } else if (generatedArray[12] === 2) {
                    alertYellow.play();
                } else if (generatedArray[12] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 13");
            }, 26000);
            setTimeout(function () {
                $("#" + generatedArray[12]).css("opacity", "");
            }, 27000);
            setTimeout(function () {
                $("#" + generatedArray[13]).css("opacity", "0.4");
                if (generatedArray[13] === 0) {
                    alertGreen.play();
                } else if (generatedArray[13] === 1) {
                    alertRed.play();
                } else if (generatedArray[13] === 2) {
                    alertYellow.play();
                } else if (generatedArray[13] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 14");
            }, 28000);
            setTimeout(function () {
                $("#" + generatedArray[13]).css("opacity", "");
            }, 29000);
            setTimeout(function () {
                $("#" + generatedArray[14]).css("opacity", "0.4");
                if (generatedArray[14] === 0) {
                    alertGreen.play();
                } else if (generatedArray[14] === 1) {
                    alertRed.play();
                } else if (generatedArray[14] === 2) {
                    alertYellow.play();
                } else if (generatedArray[14] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 15");
            }, 30000);
            setTimeout(function () {
                $("#" + generatedArray[14]).css("opacity", "");
            }, 31000);
            setTimeout(function () {
                $("#" + generatedArray[15]).css("opacity", "0.4");
                if (generatedArray[15] === 0) {
                    alertGreen.play();
                } else if (generatedArray[15] === 1) {
                    alertRed.play();
                } else if (generatedArray[15] === 2) {
                    alertYellow.play();
                } else if (generatedArray[15] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 16");
            }, 32000);
            setTimeout(function () {
                $("#" + generatedArray[15]).css("opacity", "");
            }, 33000);
            setTimeout(function () {
                $("#" + generatedArray[16]).css("opacity", "0.4");
                if (generatedArray[16] === 0) {
                    alertGreen.play();
                } else if (generatedArray[16] === 1) {
                    alertRed.play();
                } else if (generatedArray[16] === 2) {
                    alertYellow.play();
                } else if (generatedArray[16] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 17");
            }, 34000);
            setTimeout(function () {
                $("#" + generatedArray[16]).css("opacity", "");
            }, 35000);
            setTimeout(function () {
                $("#" + generatedArray[17]).css("opacity", "0.4");
                if (generatedArray[17] === 0) {
                    alertGreen.play();
                } else if (generatedArray[17] === 1) {
                    alertRed.play();
                } else if (generatedArray[17] === 2) {
                    alertYellow.play();
                } else if (generatedArray[17] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 18");
            }, 36000);
            setTimeout(function () {
                $("#" + generatedArray[17]).css("opacity", "");
            }, 37000);
            setTimeout(function () {
                $("#" + generatedArray[18]).css("opacity", "0.4");
                if (generatedArray[17] === 0) {
                    alertGreen.play();
                } else if (generatedArray[18] === 1) {
                    alertRed.play();
                } else if (generatedArray[18] === 2) {
                    alertYellow.play();
                } else if (generatedArray[18] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 19");
            }, 38000);
            setTimeout(function () {
                $("#" + generatedArray[18]).css("opacity", "");
            }, 39000);
            setTimeout(function () {
                $("#" + generatedArray[19]).css("opacity", "0.4");
                if (generatedArray[19] === 0) {
                    alertGreen.play();
                } else if (generatedArray[19] === 1) {
                    alertRed.play();
                } else if (generatedArray[19] === 2) {
                    alertYellow.play();
                } else if (generatedArray[19] === 3) {
                    alertBlue.play();
                }
                $("#startFont").html("Count: 20");
                if (pushToArray.length === 19) {
                    pushToArray.push(generatedArray[19]);
                }
            }, 40000);
            setTimeout(function () {
                $("#" + generatedArray[19]).css("opacity", "");
                $(".pad").css("pointer-events", "auto");
                $("#restartButton").css("pointer-events", "auto");
                $("#restartButton").css("opacity", "");
                $("#strictButton").css("pointer-events", "auto");
                $("#strictButton").css("opacity", "");
            }, 41000);

        } else {
            $("#strictButton").css("pointer-events", "auto");
            $("#startFont").html("You win! Restart?");
            $("#circle2").css("pointer-events", "auto");
            count = 1;
            win = true;
        }
    };

    function restart() {
        $("#strictButton").css("opacity", "0.6");
        $("#strictButton").css("pointer-events", "none");
        $("#restartButton").css("pointer-events", "none");
        $("#restartButton").css("opacity", "0.6");
        $(".pad").css("pointer-events", "none");
        count = 1;
        generatedArray = [];
        pushToArray = [];
        clickedArray = [];
        $(".pad").css("opacity", "");
        while (generatedArray.length !== 20) {
            generatedArray.push(Math.floor(Math.random() * 4));
        }
        $("#startFont").html("Starting!");
        timedOpacity();
    };

    function ifCorrect() {
        for (var i = 0; i < clickedArray.length; i++) {
            if (clickedArray[i] === pushToArray[i] && clickedArray.length === pushToArray.length) {
                correct = true;
                $("#startFont").html("Correct!");
                $(".pad").css("pointer-events", "none");
                $("#strictButton").css("opacity", "0.6");
                $("#strictButton").css("pointer-events", "none");
                $("#restartButton").css("opacity", "0.6");
                $("#restartButton").css("pointer-events", "none");
            } else if (clickedArray.length !== pushToArray.length && clickedArray[i] === pushToArray[i]) {} else {
                $("#startFont").html("Wrong!");
                correct = false;
                $(".pad").css("pointer-events", "none");
                $("#strictButton").css("opacity", "0.6");
                $("#strictButton").css("pointer-events", "none");
                $("#restartButton").css("opacity", "0.6");
                $("#restartButton").css("pointer-events", "none");
            }
        }
    };

    $("#circle2").click(function () {
        if (win === false) {
            $("#circle2").css("pointer-events", "none");
            $("#startFont").html("Starting!");
            $("#strictButton").css("opacity", "0.6");
            $("#strictButton").css("pointer-events", "none");
            timedOpacity();
        } else {
            restart();
        }
    });

    $(".pad").click(function () {
        var clickedId = parseInt(this.id);
        if (clickedId === 0) {
            alertGreen.play();
        } else if (clickedId === 1) {
            alertRed.play();
        } else if (clickedId === 2) {
            alertYellow.play();
        } else if (clickedId === 3) {
            alertBlue.play();
        }
        clickedArray.push(clickedId);
        ifCorrect();
        if (correct === true) {
            count++;
        }
        for (var z = 0; z < clickedArray.length; z++) {
            if (clickedArray[z] !== pushToArray[z] && strict === undefined || clickedArray[z] !== pushToArray[z] && strict === false) {
                timedOpacity();
            } else if (clickedArray[z] !== pushToArray[z] && strict === true) {
                restart();
                $("#startFont").html("Wrong!");
            }
        }
        if (clickedArray.length === pushToArray.length) {
            timedOpacity();
        }
    });


    $("#restartButton").click(function () {
        restart();
    });

    $("#strictButton").click(function () {
        if (strict === true) {
            strict = false;
            $("#optionsFont2").html("Strict Off");
            $("#strictButton").css("background-color", "");
        } else if (strict === false || strict === undefined) {
            strict = true;
            $("#strictButton").css("background-color", "rgba(255,204,0,0.8)");
            $("#optionsFont2").html("Strict On");
        }
    });



});
