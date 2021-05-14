<script>
    let getEvenNumbers = () => {
        const arr = [1, 2, 3, 4, 5, 6];
        
        for (num of arr){	
            if (num % 2 === 0) {       // 0 for even numbers and 1 for odd numbers.
                document.writeln(num + "<br />");
            }
        }
    }

    getEvenNumbers();
</script>
