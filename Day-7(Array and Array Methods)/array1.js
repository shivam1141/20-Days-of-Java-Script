arr1 = [12, 5, 7, 9, 4]
arr2 = [1,2,3,4]

function secondHighest(arr) {
    if (arr.length < 2) return null;
    
    const sorted = arr.sort((a, b) => b - a);
    return sorted[1];
    }

    document.write("The output after running the program is : ")

    document.write(secondHighest(arr1));
    document.write("<br>")
    document.write(secondHighest(arr2));

