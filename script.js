var nonSparseArray = [];
for (var i = 0; i < 100; i++) {
    nonSparseArray.push(Math.floor(Math.random() * 1000)); 
}

console.log("Масив до сортування:", nonSparseArray);
SortArray.bubbleSort([...nonSparseArray]);
SortArray.selectionSort([...nonSparseArray]);
SortArray.insertionSort([...nonSparseArray]);
SortArray.shellSort([...nonSparseArray]);
SortArray.quickSort([...nonSparseArray]);
         
var sparseArray = [];
for (var j = 0; j < 100; j++) {
   if (j % 2 === 0) {
       sparseArray[j] = Math.floor(Math.random() * 1000);
   }
}

console.log("Масив до сортування:", sparseArray);
SortArray.bubbleSort([...sparseArray]);
SortArray.selectionSort([...sparseArray]);
SortArray.insertionSort([...sparseArray]);
SortArray.shellSort([...sparseArray]);
SortArray.quickSort([...sparseArray]);