var str = "Cachorro, gato, rato, leão, girafa, veado";
        var animalArray = str.split(", ");

        var animalNamesDiv = document.getElementById("animal-names");
        for (var i = 0; i < animalArray.length; i++) {
            animalNamesDiv.innerHTML += "<p>" + animalArray[i] + "</p>";
        }