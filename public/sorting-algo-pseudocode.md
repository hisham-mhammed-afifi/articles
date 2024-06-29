### Bubble Sort Pseudocode with Detailed Explanation

**Bubble Sort Description:**
Bubble Sort is a simple comparison-based sorting algorithm. It works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

**Complexity:**
The average and worst-case time complexity of Bubble Sort is \(O(n^2)\), where \(n\) is the number of items being sorted. This is because each pass through the list takes \(O(n)\) comparisons and swaps, and up to \(n\) passes may be required.

**Pseudocode with Deep Explanation:**

```text
procedure BubbleSort(A: array of n items)
    n = length(A)              // Get the number of elements in the array A

    for i from 0 to n-1 do     // Outer loop for the number of passes
        // During the i-th pass, the i largest elements will be moved to their correct positions
        for j from 0 to n-i-2 do   // Inner loop for comparing adjacent elements
            if A[j] > A[j+1] then  // Compare the current element with the next element
                // If the current element is greater than the next element, swap them
                swap(A[j], A[j+1])
            end if
        end for
    end for
end procedure
```

**Detailed Explanation:**

1. **Initialization:**

   - Start by determining the length of the array \(A\) and storing it in variable \(n\).

2. **Outer Loop:**

   - The outer loop runs from \(i = 0\) to \(i = n-1\). This loop ensures that the algorithm makes enough passes through the list to sort it completely.
   - Each iteration of this loop represents one pass through the array.

3. **Inner Loop:**

   - The inner loop runs from \(j = 0\) to \(j = n-i-2\). This loop is responsible for comparing adjacent elements and swapping them if they are out of order.
   - The reason the inner loop runs only until \(n-i-2\) is that with each pass, the largest unsorted element is bubbled to its correct position at the end of the list. Thus, we can reduce the number of comparisons by one with each pass.

4. **Comparison and Swap:**

   - Within the inner loop, compare the current element \(A[j]\) with the next element \(A[j+1]\).
   - If \(A[j]\) is greater than \(A[j+1]\), swap these two elements. This ensures that the larger element moves towards the end of the list, bubbling up to its correct position.

5. **Repeat:**
   - The outer loop continues, making passes through the list and performing the above steps until the entire list is sorted.

**Example:**

Consider the array \(A = [5, 3, 8, 4, 2]\):

- **First Pass (i=0):**
  - Compare 5 and 3, swap to get [3, 5, 8, 4, 2]
  - Compare 5 and 8, no swap
  - Compare 8 and 4, swap to get [3, 5, 4, 8, 2]
  - Compare 8 and 2, swap to get [3, 5, 4, 2, 8]
- **Second Pass (i=1):**

  - Compare 3 and 5, no swap
  - Compare 5 and 4, swap to get [3, 4, 5, 2, 8]
  - Compare 5 and 2, swap to get [3, 4, 2, 5, 8]

- **Third Pass (i=2):**

  - Compare 3 and 4, no swap
  - Compare 4 and 2, swap to get [3, 2, 4, 5, 8]

- **Fourth Pass (i=3):**
  - Compare 3 and 2, swap to get [2, 3, 4, 5, 8]

The array is now sorted as [2, 3, 4, 5, 8].

**Key Points:**

- Bubble Sort is easy to understand and implement.
- It is not efficient for large datasets due to its \(O(n^2)\) complexity.
- It performs well on small or nearly sorted datasets.

---

### Selection Sort Pseudocode with Detailed Explanation

**Selection Sort Description:**
Selection Sort is a simple comparison-based sorting algorithm. It works by dividing the list into a sorted and an unsorted region. The algorithm repeatedly selects the smallest (or largest, depending on the desired order) element from the unsorted region and moves it to the end of the sorted region. This process continues until the entire list is sorted.

**Complexity:**
The time complexity of Selection Sort is \(O(n^2)\), where \(n\) is the number of items being sorted. This is because it performs \(n-1\) passes through the list, and each pass involves \(O(n)\) comparisons.

**Pseudocode with Deep Explanation:**

```text
procedure SelectionSort(A: array of n items)
    n = length(A)              // Get the number of elements in the array A

    for i from 0 to n-1 do     // Outer loop to move the boundary of the unsorted region
        minIndex = i           // Assume the first element is the minimum

        for j from i+1 to n-1 do   // Inner loop to find the smallest element in the unsorted region
            if A[j] < A[minIndex] then  // Compare current element with the assumed minimum
                minIndex = j            // Update minIndex if a smaller element is found
            end if
        end for

        if minIndex != i then     // If the smallest element is not already in its correct position
            swap(A[i], A[minIndex]) // Swap the found minimum element with the first element of the unsorted region
        end if
    end for
end procedure
```

**Detailed Explanation:**

1. **Initialization:**

   - Start by determining the length of the array \(A\) and storing it in variable \(n\).

2. **Outer Loop:**

   - The outer loop runs from \(i = 0\) to \(i = n-1\). This loop moves the boundary between the sorted and unsorted regions. Initially, the sorted region is empty, and the entire list is unsorted.

3. **Finding the Minimum Element:**

   - Assume that the first element of the unsorted region (\(A[i]\)) is the minimum. Store its index in \(minIndex\).
   - The inner loop runs from \(j = i+1\) to \(j = n-1\). This loop searches for the smallest element in the unsorted region.

4. **Comparison and Update:**

   - For each element \(A[j]\) in the unsorted region, compare it with \(A[minIndex]\). If \(A[j]\) is smaller, update \(minIndex\) to \(j\).
   - This ensures that \(minIndex\) always holds the index of the smallest element in the unsorted region by the end of the inner loop.

5. **Swapping Elements:**

   - After finding the smallest element in the unsorted region, check if it is already at the correct position (i.e., \(minIndex\) is equal to \(i\)). If not, swap \(A[i]\) with \(A[minIndex]\).
   - This places the smallest element at the end of the sorted region, effectively growing the sorted region by one element.

6. **Repeat:**
   - The outer loop continues, moving the boundary between the sorted and unsorted regions, until the entire list is sorted.

**Example:**

Consider the array \(A = [29, 10, 14, 37, 13]\):

- **First Pass (i=0):**

  - Assume minIndex = 0 (value 29)
  - Compare 29 with 10, update minIndex to 1
  - Compare 10 with 14, no change
  - Compare 10 with 37, no change
  - Compare 10 with 13, no change
  - Swap 29 with 10 to get [10, 29, 14, 37, 13]

- **Second Pass (i=1):**

  - Assume minIndex = 1 (value 29)
  - Compare 29 with 14, update minIndex to 2
  - Compare 14 with 37, no change
  - Compare 14 with 13, update minIndex to 4
  - Swap 29 with 13 to get [10, 13, 14, 37, 29]

- **Third Pass (i=2):**

  - Assume minIndex = 2 (value 14)
  - Compare 14 with 37, no change
  - Compare 14 with 29, no change
  - No swap needed, array remains [10, 13, 14, 37, 29]

- **Fourth Pass (i=3):**
  - Assume minIndex = 3 (value 37)
  - Compare 37 with 29, update minIndex to 4
  - Swap 37 with 29 to get [10, 13, 14, 29, 37]

The array is now sorted as [10, 13, 14, 29, 37].

**Key Points:**

- Selection Sort is simple to understand and implement.
- It is not efficient for large datasets due to its \(O(n^2)\) complexity.
- It performs well on small datasets or when memory writes are more costly than reads.

---

### Insertion Sort Pseudocode with Detailed Explanation

**Insertion Sort Description:**
Insertion Sort is a comparison-based sorting algorithm that builds the sorted array one item at a time. It repeatedly takes the next element from the unsorted region and inserts it into its correct position in the sorted region. The process continues until the entire array is sorted.

**Complexity:**
The average and worst-case time complexity of Insertion Sort is \(O(n^2)\), where \(n\) is the number of items being sorted. This is because each insertion requires up to \(O(n)\) comparisons and shifts.

**Pseudocode with Deep Explanation:**

```text
procedure InsertionSort(A: array of n items)
    n = length(A)                  // Get the number of elements in the array A

    for i from 1 to n-1 do         // Start from the second element (index 1)
        key = A[i]                 // Store the current element in key
        j = i - 1                  // Initialize j to point to the last element of the sorted region

        // Shift elements of the sorted region that are greater than key to the right
        while j >= 0 and A[j] > key do
            A[j + 1] = A[j]        // Shift element to the right
            j = j - 1              // Move to the previous element
        end while

        // Insert key into its correct position
        A[j + 1] = key
    end for
end procedure
```

**Detailed Explanation:**

1. **Initialization:**

   - Start by determining the length of the array \(A\) and storing it in variable \(n\).

2. **Outer Loop:**

   - The outer loop runs from \(i = 1\) to \(i = n-1\). This loop iterates through each element in the array, starting from the second element (index 1).

3. **Key and Initial Position:**

   - For each iteration, store the current element \(A[i]\) in the variable `key`. This is the element to be inserted into the sorted region.
   - Initialize \(j\) to \(i - 1\), which points to the last element of the sorted region.

4. **Shifting Elements:**

   - The while loop shifts elements of the sorted region (from \(A[0]\) to \(A[j]\)) that are greater than `key` to the right.
   - The condition \(j \geq 0\) ensures that we do not go out of bounds.
   - The condition \(A[j] > key\) ensures that we only shift elements that are greater than `key`.
   - For each iteration of the while loop, shift \(A[j]\) to the right (\(A[j + 1] = A[j]\)) and decrement \(j\) by 1.

5. **Insertion:**

   - Once the correct position for `key` is found (when \(j < 0\) or \(A[j] \leq key\)), insert `key` into \(A[j + 1]\).
   - This ensures that `key` is placed in its correct position in the sorted region.

6. **Repeat:**
   - The outer loop continues, moving through each element of the array and performing the above steps until the entire array is sorted.

**Example:**

Consider the array \(A = [5, 2, 9, 1, 5, 6]\):

- **First Pass (i=1):**

  - key = 2, j = 0
  - Compare 2 with 5, shift 5 to get [5, 5, 9, 1, 5, 6]
  - Insert 2 at index 0 to get [2, 5, 9, 1, 5, 6]

- **Second Pass (i=2):**

  - key = 9, j = 1
  - Compare 9 with 5, no shift needed
  - Insert 9 at index 2 to get [2, 5, 9, 1, 5, 6]

- **Third Pass (i=3):**

  - key = 1, j = 2
  - Compare 1 with 9, shift 9 to get [2, 5, 9, 9, 5, 6]
  - Compare 1 with 5, shift 5 to get [2, 5, 5, 9, 5, 6]
  - Compare 1 with 2, shift 2 to get [2, 2, 5, 9, 5, 6]
  - Insert 1 at index 0 to get [1, 2, 5, 9, 5, 6]

- **Fourth Pass (i=4):**

  - key = 5, j = 3
  - Compare 5 with 9, shift 9 to get [1, 2, 5, 9, 9, 6]
  - Compare 5 with 5, no shift needed
  - Insert 5 at index 3 to get [1, 2, 5, 5, 9, 6]

- **Fifth Pass (i=5):**
  - key = 6, j = 4
  - Compare 6 with 9, shift 9 to get [1, 2, 5, 5, 9, 9]
  - Compare 6 with 5, no shift needed
  - Insert 6 at index 4 to get [1, 2, 5, 5, 6, 9]

The array is now sorted as [1, 2, 5, 5, 6, 9].

**Key Points:**

- Insertion Sort is simple and efficient for small or nearly sorted datasets.
- It works well for sorting small arrays or parts of larger arrays.
- It is an adaptive algorithm, performing \(O(n)\) comparisons and shifts in the best case when the array is already sorted.

---

### Merge Sort Pseudocode with Detailed Explanation

**Merge Sort Description:**
Merge Sort is a divide-and-conquer algorithm that divides the list into two halves, recursively sorts each half, and then merges the sorted halves to produce the sorted list. This approach ensures that the entire list is sorted efficiently.

**Complexity:**
The time complexity of Merge Sort is \(O(n \log n)\), where \(n\) is the number of items being sorted. This is because the list is divided in half \(O(\log n)\) times, and merging the halves takes \(O(n)\) time.

**Pseudocode with Deep Explanation:**

```text
procedure MergeSort(A: array of n items)
    if length(A) > 1 then
        mid = length(A) // 2        // Find the midpoint of the array
        L = A[0:mid]                // Divide the array into two halves
        R = A[mid:length(A)]

        MergeSort(L)                // Recursively sort the left half
        MergeSort(R)                // Recursively sort the right half

        i = 0                       // Initial index of the first subarray
        j = 0                       // Initial index of the second subarray
        k = 0                       // Initial index of the merged array

        // Merge the sorted halves
        while i < length(L) and j < length(R) do
            if L[i] < R[j] then
                A[k] = L[i]
                i = i + 1
            else
                A[k] = R[j]
                j = j + 1
            k = k + 1

        // Copy the remaining elements of L, if any
        while i < length(L) do
            A[k] = L[i]
            i = i + 1
            k = k + 1

        // Copy the remaining elements of R, if any
        while j < length(R) do
            A[k] = R[j]
            j = j + 1
            k = k + 1
    end if
end procedure
```

**Detailed Explanation:**

1. **Base Case:**

   - If the length of the array \(A\) is 1 or less, the array is already sorted. This is the base case for the recursion.

2. **Divide:**

   - Find the midpoint of the array (\(mid = \text{length}(A) // 2\)).
   - Divide the array into two halves: \(L = A[0:mid]\) and \(R = A[mid:\text{length}(A)]\).

3. **Recursively Sort:**

   - Recursively call `MergeSort` on the left half \(L\).
   - Recursively call `MergeSort` on the right half \(R\).

4. **Merge:**

   - Initialize three indices: \(i = 0\) (for the left half), \(j = 0\) (for the right half), and \(k = 0\) (for the merged array).
   - Merge the two halves by comparing the elements of \(L\) and \(R\) and placing the smaller element into \(A[k]\).
     - If \(L[i] < R[j]\), place \(L[i]\) into \(A[k]\) and increment \(i\).
     - Otherwise, place \(R[j]\) into \(A[k]\) and increment \(j\).
     - Increment \(k\) after each insertion.
   - Continue this process until you have compared and inserted all elements from \(L\) and \(R\).

5. **Copy Remaining Elements:**

   - After the main merging loop, there may be remaining elements in either \(L\) or \(R\).
   - Copy any remaining elements from \(L\) into \(A\).
   - Copy any remaining elements from \(R\) into \(A\).

6. **Repeat:**
   - The process continues recursively, breaking down the array into smaller subarrays, sorting, and merging them until the entire array is sorted.

**Example:**

Consider the array \(A = [38, 27, 43, 3, 9, 82, 10]\):

- **Initial Split:**

  - Split into \(L = [38, 27, 43]\) and \(R = [3, 9, 82, 10]\).

- **Recursive Split for \(L\):**

  - \(L = [38, 27, 43]\) is split into \(L_1 = [38]\) and \(L_2 = [27, 43]\).
  - \(L*2 = [27, 43]\) is split into \(L*{21} = [27]\) and \(L\_{22} = [43]\).

- **Recursive Split for \(R\):**

  - \(R = [3, 9, 82, 10]\) is split into \(R_1 = [3, 9]\) and \(R_2 = [82, 10]\).
  - \(R*1 = [3, 9]\) is split into \(R*{11} = [3]\) and \(R\_{12} = [9]\).
  - \(R*2 = [82, 10]\) is split into \(R*{21} = [82]\) and \(R\_{22} = [10]\).

- **Merge Step-by-Step:**
  - Merge \(L*{21}\) and \(L*{22}\) to get \([27, 43]\).
  - Merge \(L_1\) and \([27, 43]\) to get \([27, 38, 43]\).
  - Merge \(R*{11}\) and \(R*{12}\) to get \([3, 9]\).
  - Merge \(R*{21}\) and \(R*{22}\) to get \([10, 82]\).
  - Merge \([3, 9]\) and \([10, 82]\) to get \([3, 9, 10, 82]\).
  - Merge \([27, 38, 43]\) and \([3, 9, 10, 82]\) to get \([3, 9, 10, 27, 38, 43, 82]\).

**Key Points:**

- Merge Sort is efficient with a time complexity of \(O(n \log n)\).
- It is a stable sort, meaning that equal elements retain their relative order.
- Merge Sort requires additional space proportional to the size of the input array, making it less space-efficient than in-place sorting algorithms like Quick Sort.

---

### Quick Sort Pseudocode with Detailed Explanation

**Quick Sort Description:**
Quick Sort is a divide-and-conquer algorithm that selects a 'pivot' element from the list, partitions the other elements into two sub-arrays according to whether they are less than or greater than the pivot, and recursively sorts the sub-arrays. This approach ensures that the entire list is sorted efficiently.

**Complexity:**
The average-case time complexity of Quick Sort is \(O(n \log n)\), but the worst-case time complexity is \(O(n^2)\) when the pivot selection is poor (e.g., always selecting the smallest or largest element in a sorted list).

**Pseudocode with Deep Explanation:**

```text
procedure QuickSort(A: array of n items, low: int, high: int)
    if low < high then
        // Partition the array and get the pivot index
        pi = Partition(A, low, high)

        // Recursively sort the sub-arrays
        QuickSort(A, low, pi - 1)
        QuickSort(A, pi + 1, high)
    end if
end procedure

procedure Partition(A: array of n items, low: int, high: int) returns int
    pivot = A[high]             // Choose the rightmost element as pivot
    i = low - 1                 // Initialize the index of the smaller element

    for j from low to high - 1 do
        if A[j] <= pivot then
            i = i + 1           // Increment the index of the smaller element
            swap(A[i], A[j])    // Swap the current element with the element at index i
        end if
    end for

    swap(A[i + 1], A[high])     // Swap the pivot element with the element at index i+1
    return i + 1                // Return the partition index
end procedure
```

**Detailed Explanation:**

1. **Initialization:**

   - Quick Sort is typically called with the entire array and the indices of the first and last elements: `QuickSort(A, 0, length(A) - 1)`.

2. **Recursive Division:**

   - The `QuickSort` procedure checks if the current sub-array has more than one element (`low < high`). If true, it proceeds to partition the array.

3. **Partitioning:**

   - The `Partition` procedure is responsible for arranging the elements in such a way that all elements less than or equal to the pivot are on the left, and all elements greater than the pivot are on the right.
   - The pivot is chosen as the rightmost element (`A[high]`).
   - An index `i` is initialized to `low - 1`. This index keeps track of the boundary between elements less than or equal to the pivot and those greater than the pivot.
   - The loop iterates over the elements from `low` to `high - 1`. For each element `A[j]`:
     - If `A[j]` is less than or equal to the pivot, increment `i` and swap `A[i]` with `A[j]`. This places the smaller element on the left side of the pivot.
   - After the loop, the pivot is swapped with the element at index `i + 1`, ensuring that the pivot is in its correct sorted position.
   - The `Partition` procedure returns the partition index `i + 1`.

4. **Recursive Sorting:**
   - The `QuickSort` procedure is called recursively on the two sub-arrays: one from `low` to `pi - 1` and the other from `pi + 1` to `high`.
   - This process continues recursively, partitioning and sorting the sub-arrays until the base case (`low >= high`) is reached, indicating that the sub-array is already sorted.

**Example:**

Consider the array \(A = [10, 7, 8, 9, 1, 5]\):

- **Initial Call:**

  - `QuickSort(A, 0, 5)`

- **First Partition:**
  - Pivot = 5, `i = -1`
  - Compare 10 with 5, no swap
  - Compare 7 with 5, no swap
  - Compare 8 with 5, no swap
  - Compare 9 with 5, no swap
  - Compare 1 with 5, swap 1 with 10 to get [1, 7, 8, 9, 10, 5]
  - Swap pivot 5 with 7 to get [1, 5, 8, 9, 10, 7]
  - Partition index `pi = 1`
- **Recursive Calls:**

  - `QuickSort(A, 0, 0)` (single element, no action)
  - `QuickSort(A, 2, 5)`

- **Second Partition:**
  - Pivot = 7, `i = 1`
  - Compare 8 with 7, no swap
  - Compare 9 with 7, no swap
  - Compare 10 with 7, no swap
  - Swap pivot 7 with 8 to get [1, 5, 7, 9, 10, 8]
  - Partition index `pi = 2`
- **Recursive Calls:**

  - `QuickSort(A, 2, 1)` (no action)
  - `QuickSort(A, 3, 5)`

- **Third Partition:**

  - Pivot = 8, `i = 2`
  - Compare 9 with 8, no swap
  - Compare 10 with 8, no swap
  - Swap pivot 8 with 9 to get [1, 5, 7, 8, 10, 9]
  - Partition index `pi = 3`

- **Recursive Calls:**

  - `QuickSort(A, 3, 2)` (no action)
  - `QuickSort(A, 4, 5)`

- **Fourth Partition:**

  - Pivot = 9, `i = 3`
  - Compare 10 with 9, no swap
  - Swap pivot 9 with 10 to get [1, 5, 7, 8, 9, 10]
  - Partition index `pi = 4`

- **Final Recursive Calls:**
  - `QuickSort(A, 4, 3)` (no action)
  - `QuickSort(A, 5, 5)` (single element, no action)

The array is now sorted as [1, 5, 7, 8, 9, 10].

**Key Points:**

- Quick Sort is efficient with an average time complexity of \(O(n \log n)\).
- It is an in-place sort, requiring no additional storage.
- Proper pivot selection (e.g., using median-of-three or random pivot) can help avoid the worst-case complexity of \(O(n^2)\).

---

### Heap Sort Pseudocode with Detailed Explanation

**Heap Sort Description:**
Heap Sort is a comparison-based sorting algorithm that first converts the list into a binary heap data structure (max heap). Then, it repeatedly extracts the maximum element from the heap, swaps it with the last element of the heap, and rebuilds the heap with the remaining elements. This process continues until the heap is empty, producing a sorted list.

**Complexity:**
The time complexity of Heap Sort is \(O(n \log n)\) for both the average and worst cases. This is because building the heap takes \(O(n)\) time, and each extraction and heap rebuild takes \(O(\log n)\) time.

**Pseudocode with Deep Explanation:**

```text
procedure HeapSort(A: array of n items)
    n = length(A)

    // Build a max heap
    for i from n // 2 - 1 downto 0 do
        Heapify(A, n, i)
    end for

    // Extract elements from the heap one by one
    for i from n-1 downto 1 do
        // Move the current root (maximum) to the end
        swap(A[0], A[i])

        // Call Heapify on the reduced heap
        Heapify(A, i, 0)
    end for
end procedure

procedure Heapify(A: array of n items, heapSize: int, root: int)
    largest = root           // Initialize largest as root
    left = 2 * root + 1      // Left child index
    right = 2 * root + 2     // Right child index

    // If left child is larger than root
    if left < heapSize and A[left] > A[largest] then
        largest = left
    end if

    // If right child is larger than the largest so far
    if right < heapSize and A[right] > A[largest] then
        largest = right
    end if

    // If largest is not root
    if largest != root then
        swap(A[root], A[largest])

        // Recursively heapify the affected sub-tree
        Heapify(A, heapSize, largest)
    end if
end procedure
```

**Detailed Explanation:**

1. **Building the Max Heap:**

   - A binary heap is a complete binary tree where each node is greater than or equal to its children (max heap).
   - Start by building the max heap. The last non-leaf node is at index \(n // 2 - 1\). Therefore, start heapifying from this index down to the root (index 0).

2. **Heapify Process:**

   - The `Heapify` procedure ensures that the subtree rooted at `root` follows the max heap property.
   - Initialize `largest` as the root. Calculate the indices of the left child (`2 * root + 1`) and the right child (`2 * root + 2`).
   - Compare the root with its left and right children. If either child is larger than the root, update `largest` to the index of the larger child.
   - If `largest` is not the root, swap the root with the largest child and recursively heapify the affected subtree.

3. **Extracting Elements from the Heap:**

   - After building the max heap, repeatedly extract the maximum element (root of the heap) and move it to the end of the array.
   - Swap the root (maximum element) with the last element of the current heap.
   - Reduce the heap size by one and call `Heapify` on the root to restore the max heap property for the remaining elements.

4. **Repeat:**
   - Continue the extraction and heapify process until all elements are sorted.

**Example:**

Consider the array \(A = [4, 10, 3, 5, 1]\):

- **Build Max Heap:**
  - Start from index 1 (last non-leaf node): Heapify \([4, 10, 3, 5, 1]\)
    - Compare 10 with its children (5, 1), no change needed.
  - Move to index 0: Heapify \([4, 10, 3, 5, 1]\)
    - Compare 4 with its children (10, 3), largest is 10.
    - Swap 4 with 10: \([10, 4, 3, 5, 1]\)
    - Heapify subtree rooted at index 1: \([10, 4, 3, 5, 1]\)
      - Compare 4 with its children (5, 1), largest is 5.
      - Swap 4 with 5: \([10, 5, 3, 4, 1]\)
- **Extract Elements:**
  - Swap 10 with 1: \([1, 5, 3, 4, 10]\)
  - Heapify \([1, 5, 3, 4]\)
    - Compare 1 with its children (5, 3), largest is 5.
    - Swap 1 with 5: \([5, 1, 3, 4, 10]\)
    - Heapify subtree rooted at index 1: \([5, 1, 3, 4, 10]\)
      - Compare 1 with its children (4), largest is 4.
      - Swap 1 with 4: \([5, 4, 3, 1, 10]\)
  - Swap 5 with 1: \([1, 4, 3, 5, 10]\)
  - Heapify \([1, 4, 3]\)
    - Compare 1 with its children (4, 3), largest is 4.
    - Swap 1 with 4: \([4, 1, 3, 5, 10]\)
    - Heapify subtree rooted at index 1: \([4, 1, 3, 5, 10]\), no change needed.
  - Swap 4 with 3: \([3, 1, 4, 5, 10]\)
  - Heapify \([3, 1]\)
    - Compare 3 with its child (1), no change needed.
  - Swap 3 with 1: \([1, 3, 4, 5, 10]\)
  - Heapify \([1]\), no change needed.

The array is now sorted as \([1, 3, 4, 5, 10]\).

**Key Points:**

- Heap Sort is efficient with a time complexity of \(O(n \log n)\).
- It is an in-place sort, requiring no additional storage beyond the input array.
- Heap Sort is not a stable sort, meaning that equal elements may not retain their relative order.

---

### Radix Sort Pseudocode with Detailed Explanation

**Radix Sort Description:**
Radix Sort is a non-comparative sorting algorithm that processes integer keys by their individual digits or bits. It groups and sorts the integers by each digit, starting from the least significant digit (LSD) to the most significant digit (MSD). This method can be applied using a stable sorting algorithm like Counting Sort as a subroutine to sort the digits.

**Complexity:**
The time complexity of Radix Sort is \(O(nk)\), where \(n\) is the number of integers and \(k\) is the number of digits in the largest number.

**Pseudocode with Deep Explanation:**

```text
procedure RadixSort(A: array of n items)
    maxVal = getMax(A)               // Find the maximum number to know the number of digits

    // Do counting sort for every digit, starting from the least significant digit
    exp = 1                          // Initialize exponent (1, 10, 100, ...)
    while maxVal // exp > 0 do
        CountingSortByDigit(A, exp)  // Perform counting sort based on the current digit
        exp = exp * 10               // Move to the next digit
    end while
end procedure

procedure CountingSortByDigit(A: array of n items, exp: int)
    n = length(A)
    output = array of n items        // Output array to store sorted numbers
    count = array of 10 items        // Count array to store the count of digits (0 to 9)

    // Initialize count array as 0
    for i from 0 to 9 do
        count[i] = 0
    end for

    // Store the count of occurrences of digits in the current exp place
    for i from 0 to n-1 do
        index = (A[i] // exp) % 10
        count[index] = count[index] + 1
    end for

    // Change count[i] so that it contains the actual position of this digit in output
    for i from 1 to 9 do
        count[i] = count[i] + count[i-1]
    end for

    // Build the output array
    for i from n-1 downto 0 do
        index = (A[i] // exp) % 10
        output[count[index] - 1] = A[i]
        count[index] = count[index] - 1
    end for

    // Copy the output array to A, so that A now contains sorted numbers according to the current digit
    for i from 0 to n-1 do
        A[i] = output[i]
    end for
end procedure
```

**Detailed Explanation:**

1. **Initialization:**

   - Determine the maximum value in the array \(A\) to know the number of digits we need to process. This is stored in `maxVal`.

2. **Iterating Over Digits:**

   - Initialize the exponent \(exp\) to 1, representing the least significant digit.
   - Continue the process until all digits have been processed. For each digit, perform the Counting Sort based on the current digit (represented by \(exp\)).

3. **Counting Sort by Digit:**

   - **Initialization:**

     - Initialize an output array of the same size as \(A\) to store the sorted result.
     - Initialize a count array of size 10 (for digits 0 to 9) to store the count of each digit.

   - **Counting Digits:**

     - Iterate through each element in \(A\) and calculate the digit at the current \(exp\) place using the formula \((A[i] // exp) % 10\).
     - Increment the count of the calculated digit in the count array.

   - **Accumulate Counts:**

     - Modify the count array to store the actual positions of the digits in the output array. This is done by accumulating the counts.

   - **Build Output Array:**

     - Iterate through \(A\) in reverse order to maintain stability.
     - Place each element in the correct position in the output array based on the current digit's count and decrement the count.

   - **Copy Output to Original Array:**
     - Copy the elements from the output array back to \(A\), so that \(A\) is sorted according to the current digit.

4. **Repeat for Each Digit:**
   - Multiply \(exp\) by 10 to move to the next significant digit and repeat the Counting Sort process until all digits have been processed.

**Example:**

Consider the array \(A = [170, 45, 75, 90, 802, 24, 2, 66]\):

- **Initialization:**

  - maxVal = 802 (maximum number has 3 digits)

- **First Pass (exp = 1):**

  - Counting sort based on the least significant digit:
    - Digits: [0, 5, 5, 0, 2, 4, 2, 6]
    - Sorted by LSD: [170, 90, 802, 2, 24, 45, 75, 66]

- **Second Pass (exp = 10):**

  - Counting sort based on the second digit:
    - Digits: [7, 9, 0, 0, 2, 4, 7, 6]
    - Sorted by second digit: [802, 2, 24, 45, 66, 170, 75, 90]

- **Third Pass (exp = 100):**
  - Counting sort based on the most significant digit:
    - Digits: [8, 0, 0, 0, 0, 1, 0, 0]
    - Sorted by MSD: [2, 24, 45, 66, 75, 90, 170, 802]

The array is now sorted as [2, 24, 45, 66, 75, 90, 170, 802].

**Key Points:**

- Radix Sort is efficient for sorting numbers with a fixed number of digits or bits.
- It is stable, meaning that equal elements retain their relative order.
- Radix Sort can be adapted for different bases, though base 10 is commonly used for simplicity.
