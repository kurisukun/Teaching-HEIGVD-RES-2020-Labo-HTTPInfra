$(function() {
        console.log("Loading students");

        function loadPrimes(){
                $.getJSON("/api/students/", function(primes){
                        console.log(primes);
                        var message = "Meh.. Liechti doesn't like primes";
                        if(primes.length > 0){
                                message = "Liechti's new favourite prime number: " + primes[0].prime;
                        }
                        $(".subheading").text(message);
                });
        };


        loadPrimes();
        setInterval(loadPrimes, 2000);
});

