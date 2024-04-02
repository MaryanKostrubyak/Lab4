(function(window) {
  var SortArray = {
   swap(arr, idx1, idx2) {
       var temp = arr[idx1];
       arr[idx1] = arr[idx2];
       arr[idx2] = temp;
   },
   
   bubbleSort(arr, ascending = true) {
       var comparisons = 0;
       var swaps = 0;
       var len = arr.length;
       for (var i = 0; i < len; i++) {
           for (var j = 0; j < len - 1; j++) {
               comparisons++;
               if ((ascending && arr[j] > arr[j + 1]) || (!ascending && arr[j] < arr[j + 1])) {
                   this.swap(arr, j, j + 1);
                   swaps++;
               }
           }
       }
       console.log("Сортування бульбашкою: Порівняння - " + comparisons + ", Обміни - " + swaps);
   },
 
   selectionSort(arr, ascending = true) {
       var comparisons = 0;
       var swaps = 0;
       var len = arr.length;
       for (var i = 0; i < len - 1; i++) {
           var min = i;
           for (var j = i + 1; j < len; j++) {
               comparisons++;
               if ((ascending && arr[j] < arr[min]) || (!ascending && arr[j] > arr[min])) {
                   min = j;
               }
           }
           if (min !== i) {
               this.swap(arr, i, min);
               swaps++;
           }
       }
       console.log("Сортування вибором: Порівняння - " + comparisons + ", Обміни - " + swaps);
   },
   
   insertionSort(arr, ascending = true) {
       var comparisons = 0;
       var swaps = 0;
       var len = arr.length;
       for (var i = 1; i < len; i++) {
           var key = arr[i];
           var j = i - 1;
           while (j >= 0 && ((ascending && arr[j] > key) || (!ascending && arr[j] < key))) {
               comparisons++;
               arr[j + 1] = arr[j];
               j = j - 1;
           }
           arr[j + 1] = key;
           swaps++;
       }
       console.log("Сортування вставками: Порівняння - " + comparisons + ", Обміни - " + swaps);
   },
 
   shellSort(arr, ascending = true) {
       var comparisons = 0;
       var swaps = 0;
       var len = arr.length;
       for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
           for (var i = gap; i < len; i++) {
               var temp = arr[i];
               var j = i;
               while (j >= gap && ((ascending && arr[j - gap] > temp) || (!ascending && arr[j - gap] < temp))) {
                   comparisons++;
                   arr[j] = arr[j - gap];
                   j -= gap;
               }
               arr[j] = temp;
               swaps++;
           }
       }
       console.log("Сортування Шелла: Порівняння - " + comparisons + ", Обміни - " + swaps);
   },
 
   quickSort(arr, ascending = true) {
     var self = this; 
 
     function partition(arr, low, high) {
         var pivot = arr[Math.floor((low + high) / 2)];
         var i = low - 1;
         var j = high + 1;
         while (true) {
             do {
                 i++;
                 comparisons++;
             } while ((ascending && arr[i] < pivot) || (!ascending && arr[i] > pivot));
             do {
                 j--;
                 comparisons++;
             } while ((ascending && arr[j] > pivot) || (!ascending && arr[j] < pivot));
             if (i >= j) return j;
             self.swap(arr, i, j); 
             swaps++;
         }
     }
 
     function quickSortUtil(arr, low, high) {
         if (low < high) {
             var pi = partition(arr, low, high);
             quickSortUtil(arr, low, pi);
             quickSortUtil(arr, pi + 1, high);
         }
     }
 
     var comparisons = 0;
     var swaps = 0;
     quickSortUtil(arr, 0, arr.length - 1);
     console.log("Швидке сортування: Порівняння - " + comparisons + ", Обміни - " + swaps);
  }
 };
 window.SortArray = SortArray;
 
 })(window);