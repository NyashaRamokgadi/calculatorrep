document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
        document.getElementById('addButton').addEventListener('click', Add)
        function Add(){
                var num1 = document.getElementById("FirstNumber").value;
                var num2 = document.getElementById("SecondNumber").value;
                document.getElementById("answer").innerHTML="Total ="+(Number(num1) + Number(num2));
        }

        document.getElementById('subButton').addEventListener('click', Sub)
        function Sub(){
                var num1 = document.getElementById("FirstNumber").value;
                var num2 = document.getElementById("SecondNumber").value;
                document.getElementById("answer").innerHTML="Difference ="+(Number(num1) - Number(num2));
        }
        
        document.getElementById('mulButton').addEventListener('click', Mul)
        function Mul(){
                var num1 = document.getElementById("FirstNumber").value;
                var num2 = document.getElementById("SecondNumber").value;
                document.getElementById("answer").innerHTML="Product ="+(Number(num1) * Number(num2));
        }
        
        document.getElementById('divButton').addEventListener('click', Div)
        function Div(){
                var num1 = document.getElementById("FirstNumber").value;
                var num2 = document.getElementById("SecondNumber").value;
                document.getElementById("answer").innerHTML="Division ="+(Number(num1) / Number(num2));
        }
               
}
