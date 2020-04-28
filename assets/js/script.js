$(function()
{
    var decimalExist = false;
    var current_operator = "";

    // Clearing the display
    $("#clear").on("click",allClear);

    // Displaying numbers when clicked on number buttons
    $(".number").on("click", updateDisplayforNumbers);

    // Displaying decimal point
    $("#decimal").on("click", displayDecimal);

    // Displaying operators when clicked
    $(".operator").on("click", displayOperator);

    // Computing result
    $("#equal").on("click", computeResult);

    
    function allClear()
    {
        $("#display_current").text("");
        decimalExist = false;
        current_operator = "";
    }
   function updateDisplayforNumbers()
    {
        $("#display_current").text($("#display_current").text() + $(this).text());
        // Reset the operator when adding a new number to the calculations 
        current_operator = "";
    }
    function displayDecimal()
    {
        if(!decimalExist){
            $("#display_current").text( $("#display_current").text() + $(this).text());
        }
        // Reset decimal to true after use
        decimalExist = true;
    }
    function displayOperator()
    {
        if(current_operator === "")
        {
            if($("#display_current").text())
            {
                $("#display_current").text($("#display_current").text() + $(this).text());
            }
        }
        current_operator = $(".operator").text();
        // Reset decimal to false when choosing a new operator
        // thus, next adding a new number so you can use the decimal again
        decimalExist = false;
    }
    function computeResult()
    {
        if($("#display_current").text())
        {
            $("#display_current").text(eval($("#display_current").text()).toFixed(2));
        }
    }
});




