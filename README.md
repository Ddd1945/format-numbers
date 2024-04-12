# Number Beautifier

Given the function <i>numberWithSpaces</i> in <i>src/util/GetSpaceSeparatedNum/GetSpaceSeparatedNum.ts</i>

# Conditions:
Study this function, describe how it works and what it is needed for
Rewrite the function using other, more understandable methods

# Requirements:
The original <i>numberWithSpaces</i> function should remain unchanged, your task is to implement a new function newFunc that performs the same actions
The entire task must be done on the website www.typescriptlang.org/play
To view the code execution log, you can use the “Logs” tab on the right side of the site

Tests:
There is a block with tests on the page, which should also remain unchanged. The task is considered completed if all tests complete without FAILED.

*Additional task:

There is a theoretical error in the code that will return undefined. If you find and correct it, it will be a huge plus when grading the test item.

# P.S
1) target 5132.51321
   x, false 5.13B
   x, true 5 132.51321

, The abbreviation is not correct, isn't? It was 5K, but then if has become 5. Also considering how other abbreviations works like - 	

<i>
target 12345678
x, false 12.34M
x, true 12 345 678
</i>
 
, it turns out that from 5K the number turned into 5B

2) Hierarchy like <i>GetSpaceSeparatedNum/GetSpaceSeparatedNum.ts</i> was choosen to add more clarity cause running of .ts file generates .js files in the same directory.

3) Here is code from here uploaded in <i>typescriptlang.orgebsite</i> - <b>https://rb.gy/4tsl3n<b/> 
