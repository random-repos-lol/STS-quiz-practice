// Questions data as a flat array
const quizQuestions = [
    {
        question: "What is a Floyd's Tortoise and Hare algorithm used for in the context of linked lists?",
        options: ["Sorting", "Loop Detection", "Merging", "Reverse the linked list"],
        answer: 1
    },
    {
        question: "Which of the following is a characteristic of a linked list with no loop?",
        options: ["The list is empty", "The last node points to NULL", "It has only one node", "All nodes point to the same address"],
        answer: 1
    },
    {
        question: "In a linked list with a loop, how does Floyd's Tortoise and Hare algorithm detect the loop?",
        options: ["By reversing the linked list", "By using a hash table", "By comparing node values", "By detecting a cycle in the linked list"],
        answer: 3
    },
    {
        question: "What is the time complexity of Floyd's Tortoise and Hare algorithm for loop detection in a linked list?",
        options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
        answer: 0
    },
    {
        question: "Which of the following data structures is commonly used for loop detection in linked lists?",
        options: ["Array", "Stack", "Hash Table", "Queue"],
        answer: 2
    },
    {
        question: "What is a Bitonic sequence in the context of sorting?",
        options: ["A sequence with both ascending and descending parts", "A strictly increasing sequence", "A sequence with only equal elements", "A random sequence"],
        answer: 0
    },
    {
        question: "Which sorting algorithm is typically used for sorting a Bitonic sequence?",
        options: ["Bubble Sort", "Quick Sort", "Merge Sort", "Selection Sort"],
        answer: 2
    },
    {
        question: "In Bitonic DLL, what is the role of the merging step in the sorting process?",
        options: ["To rearrange elements in descending order", "To split the list into subproblems", "To combine two sorted halves into a single sorted list", "To remove duplicates from the list"],
        answer: 2
    },
    {
        question: "What is the time complexity of sorting a Bitonic DLL using the Bitonic Sort algorithm?",
        options: ["O(n log n)", "O(n^2)", "O(log n)", "O(n)"],
        answer: 0
    },
    {
        question: "Which step is critical for achieving the bitonic property in a Bitonic DLL?",
        options: ["Merging", "Sorting", "Splitting", "Reversing"],
        answer: 2
    },
    {
        question: "Which of the following is an efficient approach to segregate even and odd nodes in a linked list?",
        options: ["Bubble Sort", "Quick Sort", "Merge Sort", "Iterative traversal"],
        answer: 3
    },
    {
        question: "What is the key idea behind segregating even and odd nodes in a linked list?",
        options: ["Sorting based on node values", "Rearranging nodes based on index", "Grouping nodes based on parity", "Removing duplicate nodes"],
        answer: 2
    },
    {
        question: "In the context of linked lists, what is the significance of maintaining the relative order of even and odd nodes during segregation?",
        options: ["It does not matter", "Required for stability", "Reduces time complexity", "Improves space complexity"],
        answer: 1
    },
    {
        question: "Which time complexity is achievable for the even-odd segregation algorithm in a linked list?",
        options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
        answer: 0
    },
    {
        question: "What is the role of pointers in the segregation of even and odd nodes in a linked list?",
        options: ["To perform arithmetic operations", "To maintain the order of nodes", "To implement recursion", "To access neighboring nodes"],
        answer: 1
    },
    {
        question: "Why is Merge Sort a preferred choice for sorting a doubly linked list?",
        options: ["It has a lower space complexity", "It is an in-place sorting algorithm", "It works well with linked lists", "It has a faster average case time complexity"],
        answer: 2
    },
    {
        question: "What is the key step in the merge sort algorithm for doubly linked lists?",
        options: ["Partitioning the list", "Merging sorted sublists", "Swapping adjacent elements", "Reversing the list"],
        answer: 1
    },
    {
        question: "What is the time complexity of the merge step in the merge sort algorithm for doubly linked lists?",
        options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
        answer: 0
    },
    {
        question: "How does merge sort maintain stability during sorting in a doubly linked list?",
        options: ["By using random pivot elements", "By comparing node values", "By maintaining the original order of equal elements", "By reversing the list at the end"],
        answer: 2
    },
    {
        question: "What is the space complexity of the merge sort algorithm for doubly linked lists?",
        options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
        answer: 2
    },
    {
        question: "What is the primary advantage of a minimum stack over a regular stack?",
        options: ["Faster push and pop operations", "Reduced space complexity", "Quick access to the minimum element", "Support for parallel processing"],
        answer: 2
    },
    {
        question: "How is the minimum element updated in a minimum stack when a new element is pushed onto it?",
        options: ["By comparing with the top element", "By keeping a separate list of minimum elements", "By using a hash table", "By iterating through the entire stack"],
        answer: 1
    },
    {
        question: "In the context of a minimum stack, what is the time complexity of the push operation?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answer: 0
    },
    {
        question: "What is a potential limitation of a minimum stack compared to a regular stack?",
        options: ["Higher time complexity for push operation", "Increased space complexity", "Limited support for dynamic resizing", "Inability to handle negative numbers"],
        answer: 1
    },
    {
        question: "How does a minimum stack ensure constant-time retrieval of the minimum element?",
        options: ["By using a hash table", "By storing the minimum value with each element", "By performing a linear search", "By using a priority queue"],
        answer: 1
    },
    {
        question: "In the Celebrity Problem, what is the definition of a 'celebrity'?",
        options: ["A famous person", "A person who knows everyone", "A person who is known by everyone", "A person with a large social media following"],
        answer: 2
    },
    {
        question: "What is the primary objective in solving the Celebrity Problem?",
        options: ["Identifying the most famous person", "Determining if a person is famous", "Finding a person who knows the most people", "Identifying a person known by everyone"],
        answer: 3
    },
    {
        question: "Which data structure is commonly used to solve the Celebrity Problem efficiently?",
        options: ["Stack", "Queue", "Graph", "Array"],
        answer: 2
    },
    {
        question: "What is the time complexity of the efficient algorithm for solving the Celebrity Problem?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
        answer: 0
    },
    {
        question: "What is the significance of the elimination step in the Celebrity Problem algorithm?",
        options: ["Reducing time complexity", "Avoiding unnecessary comparisons", "Ensuring a celebrity is found", "Minimizing space complexity"],
        answer: 1
    },
    {
        question: "What is the minimum number of moves required to solve the Tower of Hanoi problem with n disks?",
        options: ["n", "2^n-1", "2n", "n!"],
        answer: 1
    },
    {
        question: "In the iterative solution to the Tower of Hanoi, what data structure is commonly used to simulate the recursive calls?",
        options: ["Stack", "Queue", "Linked List", "Priority Queue"],
        answer: 0
    },
    {
        question: "What is the key idea behind the iterative Tower of Hanoi algorithm?",
        options: ["Using dynamic programming", "Simulating recursive calls with a stack", "Dividing the problem into subproblems", "Sorting the disks based on size"],
        answer: 1
    },
    {
        question: "How does the time complexity of the iterative Tower of Hanoi algorithm compare to the recursive solution?",
        options: ["It is higher", "It is lower", "It is the same", "It depends on the number of disks"],
        answer: 2
    },
    {
        question: "What is the role of the auxiliary peg in the iterative Tower of Hanoi algorithm?",
        options: ["Storing the smallest disk", "Facilitating the movement of disks", "Preventing the use of additional memory", "Representing the destination peg"],
        answer: 1
    },
    {
        question: "What does the Stock Span Problem aim to calculate?",
        options: ["Total stock value", "Maximum stock price", "Minimum stock price", "The span of each stock's price"],
        answer: 3
    },
    {
        question: "In the context of the Stock Span Problem, what does the 'span' of a stock refer to?",
        options: ["The price of the stock", "The difference between the highest and lowest prices", "The number of consecutive days the stock price is less than a certain threshold", "The number of consecutive days the stock price is greater than or equal to the current day"],
        answer: 3
    },
    {
        question: "Which data structure is commonly used to efficiently solve the Stock Span Problem?",
        options: ["Stack", "Queue", "Hash Table", "Linked List"],
        answer: 0
    },
    {
        question: "How does the Stock Span Problem algorithm utilize a stack to calculate the spans of stock prices?",
        options: ["By maintaining a running sum", "By storing indices in the stack", "By sorting the stock prices", "By using a priority queue"],
        answer: 1
    },
    {
        question: "What is the time complexity of the Stock Span Problem algorithm using a stack?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
        answer: 0
    },
    {
        question: "What is a DLL (Doubly Linked List) commonly used for in the context of data structures?",
        options: ["To represent a binary tree", "To implement a queue", "To store a collection of elements with quick access to the middle", "To facilitate hash table operations"],
        answer: 1
    },
    {
        question: "What is the key advantage of using a doubly linked list to implement a priority queue?",
        options: ["Reduced space complexity", "Faster insertion and deletion operations", "Quick access to the minimum element", "Improved cache locality"],
        answer: 1
    },
    {
        question: "How is the priority maintained in a priority queue implemented using a doubly linked list?",
        options: ["By using a separate array for priorities", "By comparing node values", "By using a binary heap", "By sorting the linked list"],
        answer: 3
    },
    {
        question: "What is the time complexity of the insertion operation in a priority queue implemented using a doubly linked list?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answer: 2
    },
    {
        question: "What is a potential drawback of using a doubly linked list for a priority queue compared to other data structures?",
        options: ["Higher time complexity for insertion", "Increased space complexity", "Limited support for dynamic resizing", "Inability to handle duplicate priorities"],
        answer: 0
    },
    {
        question: "In the context of sorting without extra space, which sorting algorithm is often used?",
        options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"],
        answer: 0
    },
    {
        question: "What is the primary challenge in implementing a sorting algorithm without using extra space?",
        options: ["Handling duplicate elements", "Achieving stability", "Minimizing time complexity", "In-place rearrangement of elements"],
        answer: 3
    },
    {
        question: "How does an in-place sorting algorithm differ from other sorting algorithms?",
        options: ["It uses additional arrays for sorting", "It rearranges elements within the existing array without using extra space", "It always has a lower time complexity", "It requires more memory compared to other algorithms"],
        answer: 1
    },
    {
        question: "Which sorting algorithm can be adapted for in-place sorting without using extra space efficiently?",
        options: ["Merge Sort", "Bubble Sort", "Insertion Sort", "Selection Sort"],
        answer: 2
    },
    {
        question: "What is a potential drawback of in-place sorting algorithms in terms of time complexity?",
        options: ["Higher time complexity compared to other algorithms", "Limited support for parallel processing", "Increased space complexity", "Average case time complexity may be higher"],
        answer: 0
    },
    {
        question: "In the context of the Max Sliding Window problem, what does the 'sliding window' represent?",
        options: ["A graphical representation of the array", "A fixed-size subarray moving through the main array", "The maximum value in the entire array", "The minimum value in the entire array"],
        answer: 1
    },
    {
        question: "What is the primary objective of the Max Sliding Window problem?",
        options: ["Finding the maximum element in the array", "Identifying the position of the maximum element", "Determining the maximum element in each subarray of a fixed size", "Sorting the array in descending order"],
        answer: 2
    },
    {
        question: "Which data structure is commonly used to efficiently solve the Max Sliding Window problem?",
        options: ["Stack", "Queue", "Hash Table", "Linked List"],
        answer: 1
    },
    {
        question: "What is the time complexity of the efficient algorithm for solving the Max Sliding Window problem?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
        answer: 0
    },
    {
        question: "What is the significance of using a doubly-ended queue (deque) in the Max Sliding Window algorithm?",
        options: ["To minimize space complexity", "To maintain a running sum", "To efficiently track the maximum element in the sliding window", "To sort the elements in the window"],
        answer: 2
    },
    {
        question: "In the context of stack permutations, what does a valid permutation represent?",
        options: ["A random arrangement of elements", "A sequence of elements in ascending order", "A sequence of elements that can be obtained by performing stack operations", "A sequence of elements with no duplicates"],
        answer: 2
    },
    {
        question: "What is the key property of a stack permutation that distinguishes it from other permutations?",
        options: ["It always starts with the maximum element", "It always ends with the minimum element", "It can be obtained by a specific sequence of push and pop operations on a stack", "It contains only odd or even elements"],
        answer: 2
    },
    {
        question: "What is the significance of using a stack in checking whether a given permutation is valid?",
        options: ["To reduce time complexity", "To maintain the order of elements", "To simulate the permutation process", "To sort the elements"],
        answer: 2
    },
    {
        question: "How does the concept of a stack permutation relate to the properties of a stack data structure?",
        options: ["It guarantees constant-time push and pop operations", "It ensures that elements are always sorted", "It follows the Last In, First Out (LIFO) principle", "It minimizes space complexity"],
        answer: 2
    },
    {
        question: "What is the time complexity of checking whether a given permutation is a valid stack permutation?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
        answer: 0
    },
    {
        question: "What is the primary purpose of recovering a Binary Search Tree (BST)?",
        options: ["To optimize its search operation", "To ensure its structural integrity after modifications", "To reduce its memory consumption", "To increase its traversal speed"],
        answer: 1
    },
    {
        question: "Which of the following operations can lead to the need for recovering a BST?",
        options: ["Insertion", "Deletion", "Searching", "Traversal"],
        answer: 1
    },
    {
        question: "In a Binary Search Tree, what property must be maintained after a node deletion?",
        options: ["In-order traversal property", "Pre-order traversal property", "Post-order traversal property", "Binary search property"],
        answer: 3
    },
    {
        question: "Which of the following algorithms can be used for recovering a BST after a deletion?",
        options: ["Breadth-first search (BFS)", "Depth-first search (DFS)", "In-order traversal", "Dijkstra's algorithm"],
        answer: 2
    },
    {
        question: "What does the in-order traversal of a BST produce?",
        options: ["Nodes in sorted order", "Nodes in reverse sorted order", "Nodes in random order", "Nodes in the order they were inserted"],
        answer: 0
    },
    {
        question: "When recovering a BST after a deletion, which of the following cases is the simplest to handle?",
        options: ["Node with no children", "Node with one child", "Node with two children", "Node with three children"],
        answer: 0
    },
    {
        question: "Which of the following is NOT a step in recovering a BST after a deletion?",
        options: ["Finding the node to be deleted", "Deleting the node", "Rebalancing the tree", "Reorganizing the tree to maintain the binary search property"],
        answer: 2
    },
    {
        question: "Which data structure is commonly used for tracking parent nodes during BST recovery?",
        options: ["Queue", "Stack", "Linked list", "Array"],
        answer: 1
    },
    {
        question: "In the case of a node with two children being deleted from a BST, which node is typically chosen as its replacement?",
        options: ["The node's left child", "The node's right child", "The node's parent", "A random node from the tree"],
        answer: 1
    },
    {
        question: "After recovering a BST following a deletion, what operation should be performed to ensure the tree is balanced?",
        options: ["Rotate the tree", "Reorder the nodes", "Recalculate the heights of all nodes", "Perform a rebalancing operation like AVL or Red-Black tree rotations"],
        answer: 3
    },
    {
        question: "What is the view of a tree?",
        options: ["The way the tree is displayed on the screen", "The total number of nodes in the tree", "The representation of the tree from a particular direction", "The height of the tree"],
        answer: 2
    },
    {
        question: "Which of the following is NOT a type of tree view?",
        options: ["Level order view", "Pre-order view", "In-order view", "Post-order view"],
        answer: 1
    },
    {
        question: "What does the level order view of a tree display?",
        options: ["Nodes at odd levels", "Nodes at even levels", "Nodes at every level, from left to right", "Nodes at the root level only"],
        answer: 2
    },
    {
        question: "Which view of a tree displays nodes as they are encountered during a depth-first traversal?",
        options: ["In-order view", "Pre-order view", "Post-order view", "Level order view"],
        answer: 1
    },
    {
        question: "In the post-order view of a binary tree, when is a node visited?",
        options: ["Before visiting its left child", "After visiting its left child", "Before visiting its right child", "After visiting its right child"],
        answer: 3
    },
    {
        question: "Which view of a tree is also known as the breadth-first traversal?",
        options: ["Pre-order view", "In-order view", "Level order view", "Post-order view"],
        answer: 2
    },
    {
        question: "Which view of a binary tree is used in the expression tree evaluation?",
        options: ["Pre-order view", "In-order view", "Post-order view", "Level order view"],
        answer: 1
    },
    {
        question: "What is the main advantage of the level order view of a tree?",
        options: ["It requires less memory", "It is faster than other views", "It displays the structure of the tree clearly", "It is easier to implement"],
        answer: 2
    },
    {
        question: "Which view of a binary tree is used to create a copy of the tree?",
        options: ["Pre-order view", "In-order view", "Post-order view", "Level order view"],
        answer: 0
    },
    {
        question: "In a binary tree, which view provides nodes in non-decreasing order when the tree is a binary search tree (BST)?",
        options: ["Pre-order view", "In-order view", "Post-order view", "Level order view"],
        answer: 1
    },
    {
        question: "What is Breadth-First Search (BFS) primarily used for?",
        options: ["Finding the shortest path in a weighted graph", "Traversing and searching tree or graph data structures", "Sorting elements in an array", "Determining the longest path in a directed acyclic graph (DAG)"],
        answer: 1
    },
    {
        question: "In BFS, which data structure is typically used to store the vertices of the graph or tree?",
        options: ["Stack", "Queue", "Priority queue", "Linked list"],
        answer: 1
    },
    {
        question: "What is the time complexity of BFS when applied to an adjacency matrix representation of a graph with V vertices and E edges?",
        options: ["O(V)", "O(E)", "O(V+E)", "O(V log V)"],
        answer: 2
    },
    {
        question: "In BFS, which vertices are explored first?",
        options: ["Vertices with lower degree", "Vertices with higher degree", "Vertices with the lowest value", "Vertices with the highest value"],
        answer: 2
    },
    {
        question: "What is the order of traversal in BFS?",
        options: ["Depth-first", "Pre-order", "Post-order", "Level-order"],
        answer: 3
    },
    {
        question: "In BFS, which traversal strategy is employed to visit neighboring vertices of a vertex?",
        options: ["Depth-first traversal", "In-order traversal", "Level-order traversal", "Post-order traversal"],
        answer: 2
    },
    {
        question: "Which of the following statements about BFS is true?",
        options: ["BFS can be used to find the topological sorting of a graph", "BFS cannot handle graphs with cycles", "BFS is not optimal for finding the shortest path in an unweighted graph", "BFS explores vertices in the order they are discovered"],
        answer: 3
    },
    {
        question: "Which of the following is NOT a step in BFS?",
        options: ["Enqueue the starting vertex", "Dequeue the starting vertex", "Enqueue neighboring vertices", "Dequeue neighboring vertices"],
        answer: 1
    },
    {
        question: "In BFS, when should a visited vertex be enqueued?",
        options: ["Before exploring its neighbors", "After exploring its neighbors", "Before dequeueing its neighbors", "After dequeueing its neighbors"],
        answer: 0
    },
    {
        question: "What is the space complexity of BFS?",
        options: ["O(V)", "O(E)", "O(V+E)", "O(V log V)"],
        answer: 0
    },
    {
        question: "What is Depth-First Search (DFS) primarily used for?",
        options: ["Finding the shortest path in a weighted graph", "Traversing and searching tree or graph data structures", "Sorting elements in an array", "Determining the longest path in a directed acyclic graph (DAG)"],
        answer: 1
    },
    {
        question: "Which data structure is typically used for implementing DFS?",
        options: ["Queue", "Stack", "Priority queue", "Linked list"],
        answer: 1
    },
    {
        question: "What is the time complexity of DFS when applied to an adjacency list representation of a graph with V vertices and E edges?",
        options: ["O(V)", "O(E)", "O(V+E)", "O(V log V)"],
        answer: 2
    },
    {
        question: "In DFS, which traversal strategy is employed to explore neighboring vertices?",
        options: ["Depth-first traversal", "In-order traversal", "Level-order traversal", "Post-order traversal"],
        answer: 0
    },
    {
        question: "What is the order of traversal in DFS?",
        options: ["Depth-first", "Pre-order", "Post-order", "Level-order"],
        answer: 0
    },
    {
        question: "Which of the following statements about DFS is true?",
        options: ["DFS always finds the shortest path in a graph", "DFS uses a FIFO strategy for exploring vertices", "DFS may result in a disconnected graph", "DFS explores vertices in the order they are discovered"],
        answer: 2
    },
    {
        question: "What is the main disadvantage of using recursion for implementing DFS?",
        options: ["Recursion has higher space complexity compared to iterative methods", "Recursion is slower than iterative methods", "Recursion may lead to stack overflow for large graphs", "Recursion cannot handle graphs with cycles"],
        answer: 2
    },
    {
        question: "Which of the following is NOT a step in DFS?",
        options: ["Enqueue the starting vertex", "Process the current vertex", "Recursively explore neighboring vertices", "Backtrack to the previous vertex"],
        answer: 0
    },
    {
        question: "In DFS, when should a visited vertex be marked?",
        options: ["Before exploring its neighbors", "After exploring its neighbors", "Before recursively calling DFS on its neighbors", "After recursively calling DFS on its neighbors"],
        answer: 1
    },
    {
        question: "What is the space complexity of DFS?",
        options: ["O(V)", "O(E)", "O(V+E)", "O(V log V)"],
        answer: 0
    },
    {
        question: "What is a binomial tree?",
        options: ["A tree where each node has at most two children", "A tree where each node has exactly two children", "A tree with a specific ordering of nodes", "A tree used in binary search algorithms"],
        answer: 1
    },
    {
        question: "Which operation is NOT supported efficiently by a binomial heap?",
        options: ["Insertion", "Deletion", "Union", "Search"],
        answer: 3
    },
    {
        question: "In a binomial heap, what is the time complexity of inserting a new element?",
        options: ["O(log n)", "O(n)", "O(log^2 n)", "O(1)"],
        answer: 0
    },
    {
        question: "What is the maximum height of a binomial tree with n nodes?",
        options: ["n", "2n", "log2 n", "log2(n+1)"],
        answer: 3
    },
    {
        question: "Which of the following is a property of a binomial tree of order k?",
        options: ["It has k children", "It has 2^k nodes", "It has k+1 nodes", "It has 2^(k+1)-1 nodes"],
        answer: 1
    },
    {
        question: "What operation is typically used to merge two binomial heaps?",
        options: ["Union", "Intersection", "Difference", "Addition"],
        answer: 0
    },
    {
        question: "Which of the following statements about binomial heaps is true?",
        options: ["They are always balanced binary trees", "They support constant time insertion and deletion", "They are typically implemented using arrays", "They have a worst-case time complexity of O(log n) for most operations"],
        answer: 3
    },
    {
        question: "In a binomial heap, what is the purpose of the \"merge\" operation?",
        options: ["Combining two trees of the same order into one tree of the next order", "Splitting a tree into smaller trees", "Finding the minimum element in the heap", "Deleting an element from the heap"],
        answer: 0
    },
    {
        question: "Which of the following is NOT a common application of binomial heaps?",
        options: ["Priority queue", "Sorting algorithms", "Dijkstra's shortest path algorithm", "Prim's minimum spanning tree algorithm"],
        answer: 1
    },
    {
        question: "What is the advantage of using a binomial heap over a binary heap?",
        options: ["Binomial heaps have better worst-case time complexity for most operations", "Binary heaps are more space efficient", "Binomial heaps support more operations", "Binary heaps are easier to implement"],
        answer: 0
    },
    {
        question: "What is the purpose of a winner tree?",
        options: ["To store elements in a sorted order", "To efficiently find the maximum (or minimum) element among a set of elements", "To balance binary search trees", "To implement priority queues"],
        answer: 1
    },
    {
        question: "In a winner tree, what do the leaves represent?",
        options: ["Internal nodes", "The maximum element", "The elements themselves", "The minimum element"],
        answer: 2
    },
    {
        question: "How are winner trees commonly used in algorithms?",
        options: ["For graph traversal", "For heap sort", "For tournament-style algorithms", "For binary search"],
        answer: 2
    },
    {
        question: "Which node of a winner tree contains the overall winner?",
        options: ["Root node", "Leaf nodes", "Internal nodes", "None of the above"],
        answer: 0
    },
    {
        question: "What operation is performed to construct a winner tree?",
        options: ["Merge", "Compare", "Split", "Rotate"],
        answer: 1
    },
    {
        question: "Which of the following is NOT a step in using a winner tree to find the maximum element?",
        options: ["Initialize the winner tree", "Insert elements in random order", "Construct the winner tree", "Access the root node"],
        answer: 1
    },
    {
        question: "What type of elements can be compared using a winner tree?",
        options: ["Numbers only", "Strings only", "Any comparable elements", "Only elements of the same type"],
        answer: 2
    },
    {
        question: "How does a winner tree compare elements?",
        options: ["Using hashing", "By iterating through all elements", "By comparing pairs of elements recursively", "By performing binary search"],
        answer: 2
    },
    {
        question: "Which data structure is NOT commonly implemented using winner trees?",
        options: ["Priority queue", "Heap", "Hash table", "Tournament bracket"],
        answer: 2
    },
    {
        question: "In a winner tree with n elements, how many comparisons are needed to find the maximum element?",
        options: ["n", "log n", "2n-1", "n-1"],
        answer: 3
    },
    {
        question: "What is the Bellman-Ford algorithm used for?",
        options: ["Finding the shortest path in a weighted directed graph with negative edge weights", "Sorting elements in an array", "Implementing a priority queue", "Searching for an element in a binary search tree"],
        answer: 0
    },
    {
        question: "Which data structure is commonly used to represent graphs in the Bellman-Ford algorithm?",
        options: ["Arrays", "Linked lists", "Hash tables", "Adjacency matrices or adjacency lists"],
        answer: 3
    },
    {
        question: "What is the time complexity of the Bellman-Ford algorithm?",
        options: ["O(V)", "O(V log V)", "O(V+E)", "O(V^2)"],
        answer: 2
    },
    {
        question: "In the context of the Bellman-Ford algorithm, what does 'V' represent?",
        options: ["The number of vertices in the graph", "The number of edges in the graph", "The maximum possible weight of an edge", "The source vertex"],
        answer: 0
    },
    {
        question: "What does the Bellman-Ford algorithm initialize the shortest distance to each vertex with?",
        options: ["Positive infinity", "Negative infinity", "Zero", "The weight of the source vertex to itself"],
        answer: 0
    },
    {
        question: "What is the purpose of the relaxation step in the Bellman-Ford algorithm?",
        options: ["To initialize the shortest distances", "To update the shortest distances if a shorter path is found", "To remove edges with negative weights", "To reverse the direction of edges in the graph"],
        answer: 1
    },
    {
        question: "What does a negative cycle in a graph indicate in the context of the Bellman-Ford algorithm?",
        options: ["The graph has no shortest paths", "The graph contains edges with negative weights", "The graph has multiple shortest paths between some pairs of vertices", "The graph has a cycle whose total weight is negative"],
        answer: 3
    },
    {
        question: "Which step in the Bellman-Ford algorithm detects negative cycles?",
        options: ["Initialization", "Relaxation", "Shortest path determination", "Negative cycle detection"],
        answer: 3
    },
    {
        question: "When does the Bellman-Ford algorithm terminate?",
        options: ["After a fixed number of iterations", "When all vertices have been visited", "When no more relaxation can be performed", "When a negative cycle is detected"],
        answer: 2
    },
    {
        question: "What does the Bellman-Ford algorithm return if a negative cycle is detected?",
        options: ["The shortest paths to all vertices", "The shortest path from the source vertex to a specific target vertex", "An error indicating the presence of a negative cycle", "The length of the shortest path"],
        answer: 2
    },
    {
        question: "What is Dial's Algorithm used for?",
        options: ["Finding the maximum flow in a network", "Sorting elements in an array", "Finding the shortest path in a graph with non-negative edge weights", "Detecting negative cycles in a graph"],
        answer: 2
    },
    {
        question: "Which data structure does Dial's Algorithm utilize?",
        options: ["Arrays", "Linked lists", "Priority queues", "Stacks"],
        answer: 0
    },
    {
        question: "What does each bucket in Dial's Algorithm contain?",
        options: ["Vertices", "Edges", "Distances from the source vertex", "Paths"],
        answer: 0
    },
    {
        question: "How are the buckets indexed in Dial's Algorithm?",
        options: ["By vertex IDs", "By vertex distances from the source", "By edge weights", "By vertex degrees"],
        answer: 1
    },
    {
        question: "What is the time complexity of Dial's Algorithm?",
        options: ["O(V)", "O(V log V)", "O(V+E)", "O(E log V)"],
        answer: 2
    },
    {
        question: "When does Dial's Algorithm terminate?",
        options: ["When all vertices are visited", "When all buckets are empty", "When a negative cycle is detected", "When the maximum flow is reached"],
        answer: 1
    },
    {
        question: "What operation is performed during each iteration of Dial's Algorithm?",
        options: ["Vertex relaxation", "Edge relaxation", "Bucket selection", "Bucket sort"],
        answer: 0
    },
    {
        question: "What does Dial's Algorithm prioritize during bucket selection?",
        options: ["Buckets with the most vertices", "Buckets with the fewest vertices", "Buckets with the highest distances", "Buckets with the lowest distances"],
        answer: 1
    },
    {
        question: "Which type of graphs is Dial's Algorithm most suitable for?",
        options: ["Graphs with negative edge weights", "Graphs with positive edge weights", "Graphs with non-negative edge weights and a limited range of weights", "Graphs with arbitrary edge weights"],
        answer: 2
    },
    {
        question: "What does Dial's Algorithm return as output?",
        options: ["The maximum flow in the network", "The shortest paths from the source vertex to all other vertices", "An error if a negative cycle is detected", "The vertices visited during the traversal"],
        answer: 1
    },
    {
        question: "What is topological sorting used for?",
        options: ["Finding shortest paths in a graph", "Detecting cycles in a graph", "Ordering tasks with dependencies", "Generating minimum spanning trees"],
        answer: 2
    },
    {
        question: "Which of the following data structures is commonly used to implement topological sorting?",
        options: ["Queue", "Stack", "Array", "Heap"],
        answer: 1
    },
    {
        question: "In a directed acyclic graph (DAG), topological sorting results in:",
        options: ["A linear ordering of vertices", "A minimum spanning tree", "A cyclic dependency graph", "A binary search tree"],
        answer: 0
    },
    {
        question: "Which algorithm is commonly used to perform topological sorting?",
        options: ["Breadth-first search (BFS)", "Depth-first search (DFS)", "Dijkstra's algorithm", "Prim's algorithm"],
        answer: 1
    },
    {
        question: "In topological sorting, vertices with no incoming edges are processed:",
        options: ["First", "Last", "Randomly", "In any order"],
        answer: 0
    },
    {
        question: "If a graph has a cycle, what happens during topological sorting?",
        options: ["The algorithm fails", "The cycle is ignored", "The cycle is broken", "The algorithm continues indefinitely"],
        answer: 0
    },
    {
        question: "Topological sorting can be applied to which type of graphs?",
        options: ["Directed graphs", "Undirected graphs", "Weighted graphs", "Bipartite graphs"],
        answer: 0
    },
    {
        question: "Which of the following statements is true about topological sorting?",
        options: ["It always produces a unique ordering of vertices", "It can only be applied to graphs with a single source and sink", "It can have multiple valid orderings for a given graph", "It has a time complexity of O(n log n)"],
        answer: 2
    },
    {
        question: "In a directed acyclic graph (DAG), if there are multiple vertices with no incoming edges, which one is processed first during topological sorting?",
        options: ["The vertex with the highest index", "The vertex with the lowest index", "Any of the vertices with no incoming edges", "None of the above"],
        answer: 2
    },
    {
        question: "In a directed acyclic graph (DAG) with vertices {a, b, c, d, e} and edges {ab, bc, cd, de}, what would be the topological sorting order?",
        options: ["{a, b, c, d, e}", "{e, d, c, b, a}", "{a, e, b, c, d}", "{a, b, c, e, d}"],
        answer: 0
    },
    {
        question: "What is the purpose of the relaxation step in the Bellman-Ford algorithm?",
        options: ["To initialize the shortest distances", "To update the shortest distances if a shorter path is found", "To remove edges with negative weights", "To reverse the direction of edges in the graph"],
        answer: 1
    },
    {
        question: "What does a negative cycle in a graph indicate in the context of the Bellman-Ford algorithm?",
        options: ["The graph has no shortest paths", "The graph contains edges with negative weights", "The graph has multiple shortest paths between some pairs of vertices", "The graph has a cycle whose total weight is negative"],
        answer: 3
    },
    {
        question: "Which step in the Bellman-Ford algorithm detects negative cycles?",
        options: ["Initialization", "Relaxation", "Shortest path determination", "Negative cycle detection"],
        answer: 3
    },
    {
        question: "When does the Bellman-Ford algorithm terminate?",
        options: ["After a fixed number of iterations", "When all vertices have been visited", "When no more relaxation can be performed", "When a negative cycle is detected"],
        answer: 2
    },
    {
        question: "What does the Bellman-Ford algorithm return if a negative cycle is detected?",
        options: ["The shortest paths to all vertices", "The shortest path from the source vertex to a specific target vertex", "An error indicating the presence of a negative cycle", "The length of the shortest path"],
        answer: 2
    },
    {
        question: "What is Dial's Algorithm used for?",
        options: ["Finding the maximum flow in a network", "Sorting elements in an array", "Finding the shortest path in a graph with non-negative edge weights", "Detecting negative cycles in a graph"],
        answer: 2
    },
    {
        question: "Which data structure does Dial's Algorithm utilize?",
        options: ["Arrays", "Linked lists", "Priority queues", "Stacks"],
        answer: 0
    },
    {
        question: "What does each bucket in Dial's Algorithm contain?",
        options: ["Vertices", "Edges", "Distances from the source vertex", "Paths"],
        answer: 0
    },
    {
        question: "How are the buckets indexed in Dial's Algorithm?",
        options: ["By vertex IDs", "By vertex distances from the source", "By edge weights", "By vertex degrees"],
        answer: 1
    },
    {
        question: "What is the time complexity of Dial's Algorithm?",
        options: ["O(V)", "O(V log V)", "O(V+E)", "O(E log V)"],
        answer: 2
    },
    {
        question: "When does Dial's Algorithm terminate?",
        options: ["When all vertices are visited", "When all buckets are empty", "When a negative cycle is detected", "When the maximum flow is reached"],
        answer: 1
    },
    {
        question: "What operation is performed during each iteration of Dial's Algorithm?",
        options: ["Vertex relaxation", "Edge relaxation", "Bucket selection", "Bucket sort"],
        answer: 0
    },
    {
        question: "What does Dial's Algorithm prioritize during bucket selection?",
        options: ["Buckets with the most vertices", "Buckets with the fewest vertices", "Buckets with the highest distances", "Buckets with the lowest distances"],
        answer: 1
    },
    {
        question: "Which type of graphs is Dial's Algorithm most suitable for?",
        options: ["Graphs with negative edge weights", "Graphs with positive edge weights", "Graphs with non-negative edge weights and a limited range of weights", "Graphs with arbitrary edge weights"],
        answer: 2
    },
    {
        question: "What does Dial's Algorithm return as output?",
        options: ["The maximum flow in the network", "The shortest paths from the source vertex to all other vertices", "An error if a negative cycle is detected", "The vertices visited during the traversal"],
        answer: 1
    },
    {
        question: "What is vertical order traversal of a binary tree?",
        options: ["Traversing the tree level by level", "Visiting nodes from left to right", "Exploring nodes from top to bottom", "Grouping nodes based on their horizontal distance from the root"],
        answer: 3
    },
    {
        question: "What is heap sort primarily used for?",
        options: ["Sorting linked lists", "Sorting arrays", "Searching in trees", "Graph traversal"],
        answer: 1
    },
    {
        question: "Which data structure is used to implement heap sort?",
        options: ["Queue", "Stack", "Heap", "Linked list"],
        answer: 2
    },
    {
        question: "What type of heap is typically used in heap sort?",
        options: ["Max heap", "Min heap", "Binary tree", "AVL tree"],
        answer: 0
    },
    {
        question: "What is the time complexity of heap sort in the worst-case scenario?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(2^n)"],
        answer: 1
    }
];

// DOM Elements
const questionSelectionSection = document.getElementById('question-selection');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const questionsContainer = document.getElementById('questions-container');
const detailedResults = document.getElementById('detailed-results');
const scoreDisplay = document.getElementById('score-display');
const startQuizBtn = document.getElementById('start-quiz');
const submitQuizBtn = document.getElementById('submit-quiz');
const retryQuizBtn = document.getElementById('retry-quiz');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// Theme management
function initTheme() {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Event listeners
function setupEventListeners() {
    // Start quiz button
    startQuizBtn.addEventListener('click', startQuiz);
    
    // Submit quiz button
    submitQuizBtn.addEventListener('click', submitQuiz);
    
    // Retry quiz button
    retryQuizBtn.addEventListener('click', resetQuiz);
    
    // Theme toggle button
    themeToggleBtn.addEventListener('click', toggleTheme);
    
    // Make entire count option div clickable, not just the radio button
    const countOptions = document.querySelectorAll('.count-option');
    countOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Find the radio input inside this div and check it
            const radio = this.querySelector('input[type="radio"]');
            radio.checked = true;
        });
    });
}

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    const newArray = [...array]; // Create a copy to avoid modifying original
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
    }
    return newArray;
}

// Start the quiz
function startQuiz() {
    const radios = document.getElementsByName('question-count');
    let selectedCount = 'all';
    
    // Get selected count
    for (let radio of radios) {
        if (radio.checked) {
            selectedCount = radio.value;
            break;
        }
    }
    
    generateQuiz(selectedCount);
    questionSelectionSection.classList.add('hidden');
    quizContainer.classList.remove('hidden');
}

// Generate quiz based on selected count
function generateQuiz(selectedCount) {
    questionsContainer.innerHTML = '';
    
    // Shuffle all questions
    const shuffledQuestions = shuffleArray(quizQuestions);
    
    // Determine how many questions to use
    let questionsToUse;
    if (selectedCount === 'all') {
        questionsToUse = shuffledQuestions;
    } else {
        const count = parseInt(selectedCount);
        // Use the minimum of the requested count and available questions
        questionsToUse = shuffledQuestions.slice(0, Math.min(count, shuffledQuestions.length));
    }
    
    // Generate the question cards
    questionsToUse.forEach((question, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.dataset.correctAnswer = question.answer;
        
        let optionsHTML = '';
        question.options.forEach((option, idx) => {
            optionsHTML += `
                <div class="option" data-index="${idx}">
                    <span>${String.fromCharCode(65 + idx)}.</span>
                    <span>${option}</span>
                </div>
            `;
        });
        
        questionCard.innerHTML = `
            <div class="question-text">Q${index + 1}: ${question.question}</div>
            <div class="options-container">
                ${optionsHTML}
            </div>
        `;
        
        questionsContainer.appendChild(questionCard);
        
        // Add event listeners to options
        const options = questionCard.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                // Remove selected class from all options in this question
                options.forEach(opt => opt.classList.remove('selected'));
                // Add selected class to clicked option
                option.classList.add('selected');
            });
        });
    });
}

// Submit quiz and show results
function submitQuiz() {
    const questionCards = document.querySelectorAll('.question-card');
    let correctAnswers = 0;
    let totalQuestions = questionCards.length;
    
    questionCards.forEach(card => {
        const correctAnswerIndex = parseInt(card.dataset.correctAnswer);
        const selectedOption = card.querySelector('.option.selected');
        
        // Generate result view for this question
        const resultCard = document.createElement('div');
        resultCard.className = 'question-card';
        
        // Copy question and options
        resultCard.innerHTML = card.innerHTML;
        
        const options = resultCard.querySelectorAll('.option');
        
        // Mark correct answer and selected answer
        if (selectedOption) {
            const selectedIndex = parseInt(selectedOption.dataset.index);
            options[selectedIndex].classList.add('selected');
            
            if (selectedIndex === correctAnswerIndex) {
                options[selectedIndex].classList.add('correct');
                options[selectedIndex].innerHTML += '<span class="result-icon">✓</span>';
                correctAnswers++;
            } else {
                options[selectedIndex].classList.add('incorrect');
                options[selectedIndex].innerHTML += '<span class="result-icon">✗</span>';
                options[correctAnswerIndex].classList.add('correct');
            }
        } else {
            // If no option was selected
            options[correctAnswerIndex].classList.add('correct');
        }
        
        // Add correct answer text
        const correctAnswerText = document.createElement('div');
        correctAnswerText.className = 'correct-answer';
        correctAnswerText.textContent = `Correct answer: ${String.fromCharCode(65 + correctAnswerIndex)}`;
        resultCard.appendChild(correctAnswerText);
        
        detailedResults.appendChild(resultCard);
    });
    
    // Display score
    scoreDisplay.textContent = `Score: ${correctAnswers} out of ${totalQuestions} (${Math.round((correctAnswers/totalQuestions)*100)}%)`;
    
    // Show results container, hide quiz container
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
}

// Reset quiz to start again
function resetQuiz() {
    // Clear results
    detailedResults.innerHTML = '';
    
    // Show question selection, hide results
    resultsContainer.classList.add('hidden');
    questionSelectionSection.classList.remove('hidden');
}

// Initialize the app
function init() {
    initTheme();
    setupEventListeners();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 