$(document).ready(
    function()
    {
        //add event handlers

        $("#calcButton").click(calculateLateFee);
        $("#alertButton").click(showPopup);
        $("#calcPizzaButton").click(calculateCoworkerCost);
        $("#alertPizzaButton").click(showPopup);




        //add program logic

        function calculateLateFee()
        {
            //get data from
            var calcBooks= parseFloat($("#lateBooks").val());
            var calculateDaysBooks = parseFloat($("#lateDaysBooks").val());

            var calcDvds= parseFloat($("#lateDvds").val());
            var calculateDaysDvds = parseFloat($("#lateDaysDvds").val());

            //parse to numbers

            // do the math

            //late fee charge for books $0.25 per day per book
            //late fee charge for DVDs $0.50 per day per DVD

            //Calculate late charges for books
            var lateBooksCharge = calcBooks * calculateDaysBooks* 0.25;

            //Calculate late charges for DVDs
            var lateDvdsCharge = calcDvds * calculateDaysDvds* 0.50;

            //Calculate total Patron Late Fee Charge(late charges for all books plus late charges for all DVDs.

            var totLateCharges = lateBooksCharge + lateDvdsCharge;

            //put results in spans
            $("#feeChargeOutput").text(totLateCharges.toFixed(2));
            $("p.output").show();

        }

        function showPopup()
        {
            alert("Hello");

        }

        function calculateCoworkerCost()
        {
            //get data from

            var calcCoWorkers= parseFloat($("#numCoworkers").val());
            var calcCheese = parseFloat($("#numCheese").val());
            var calcCheeseTop = parseFloat($("#numCheeseTop").val());
            var calcnumTop = parseFloat($("#numTop").val());

            //parse to numbers

            // do the math
            //A basic cheese pizza cost $15.00
            // A basic cheese pizza cost with toppings, $15.00 plus $1.25 per topping
            // Calculate basic cheese pizza cost = number of pizzas times $15.00
            // Calculate basic cheese pizza cost plus toppings = (number pizza with toppings *$15.00)+(1.25*number of toppings
            // Calculate total pizza cost = basic cheese pizza cost + basic cheese pizza cost plus toppings
            // Calculate total pizza cost/number of coworkers = cost per coworker

            var basicCheese = calcCheese * 15.00;
            var basicCheesePlus = (calcCheeseTop *15) + (1.25*calcnumTop);
            var totPizzaCost = basicCheese + basicCheesePlus;
            var totCoworkerCost = totPizzaCost/calcCoWorkers;


            //put results in spans
            $("#coworkerCostOutput").text(totCoworkerCost.toFixed(2));
            $("p.output").show();

        }
        function showPopup()
        {
            alert("Hello");

        }

    }

);