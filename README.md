# HTPL – Hyper Text Programming Language

<b>HTPL</b> is a tool designed to convert standard HTML into a more structured and programmable format, enhancing the development process of web applications. This approach aims to streamline HTML coding by introducing programming constructs, making it more efficient and maintainable.

<h2>Project Overview</h2>
This project provides a platform to transform traditional HTML code into HTPL, allowing developers to:
<br><br>
<ul>
  <li>
    <b>Enhance Readability:</b>
    By structuring HTML with programming paradigms, the code becomes more organized and easier to understand.
  </li>
  <li>
    <b>Improve Maintainability:</b>
   Programmable structures facilitate easier updates and modifications.
  </li>
  <li>
    <b>Promote Reusability :</b>
    Components can be reused across different parts of a project, reducing redundancy.
  </li>
</ul>

<h2>Getting Started</h2>

To utilize HTPL in your project:

<ol type='1'>
 <li>
   <b>Clone the Repository:</b>
   Obtain the latest version of the project.
 </li>
 <li>
   <b>Explore the Files:</b>
   Familiarize yourself with the provided index.html, script.js, and style.css files.
 </li>
 <li>
   <b>Convert HTML to HTPL:</b>
  Use the tools/scripts provided to transform your existing HTML code into HTPL.
 </li>
</ol>

<h2>How to use ?</h2> <small>look at 'index.html' file to undertand better</small>
<table>
  <thead>
    <tr>
      <th>Tag</th>
      <th>Purpose</th>
      <th>Structure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>use-var</td>
      <td>Declare new variable (or change its value)</td>
      <td>&lt;use-var name="&lt;variableName&gt;"&gt;&lt;value&gt;&lt;/use-var&gt;</td>
    </tr>
    <tr>
      <td>def-const</td>
      <td>Declare new constant</td>
      <td>&lt;def-const name="&lt;constantName&gt;"&gt;&lt;value&gt;&lt;/def-const&gt;</td>
    </tr>
    <tr>
      <td>if-condition</td>
      <td>To implement a condition statement</td>
      <td>&lt;if-condition condition="&lt;condition&gt;" state="&lt;state&gt;"&gt;&lt;/if-condition&gt;</td>
    </tr>
    <tr>
      <td>repeat-times</td>
      <td>Loop statement with a known number of iterations</td>
      <td>&lt;repeat-times times="&lt;HowManyTimes&gt;"&gt;&lt;/repeat-times&gt;</td>
    </tr>
    <tr>
      <td>use-procedure</td>
      <td>Declare/define a procedure</td>
      <td>&lt;use-procedure type="&lt;declare | define&gt;"&gt;&lt;code&gt;&lt;/use-procedure&gt;</td>
    </tr>
    <tr>
      <td>while-loop</td>
      <td>Loop statement with a condition</td>
      <td>&lt;while-loop condition="&lt;condition&gt;"&gt;&lt;/while-loop&gt;</td>
    </tr>
    <tr>
      <td>math-calc</td>
      <td>To do math operations (simple or complex with functions like abs and sqrt)</td>
      <td>&lt;math-calc elem="&lt;functionName(from Math lib of JavaScript), only if lib='true'&gt;" lib="true||false (true if you'll use Math lib, otherwise false)"&gt; "&lt;operationSTATEMENT&gt;" &lt;/math-calc&gt;</td>
    </tr>
    <tr>
      <td>print-eval</td>
      <td>Execute something and print the result inside this element</td>
      <td>&lt;print-eval&gt;&lt;instructions/tags(for HTPL tags or JS code) : !Be careful with types especially strings&gt;&lt;/print-eval&gt;</td>
    </tr>
    <tr>
      <td>new-alrt</td>
      <td>To do different alert types (prompt, normal alert, confirm)</td>
      <td>&lt;new-alrt type="&lt;itstype:prompt,alert,confirm&gt;"&gt;&lt;message&gt;&lt;/new-alrt&gt;</td>
    </tr>
  </tbody>
</table>

For a detailed walkthrough and demonstration, refer to the project explanation video: <br>
<a href="https://www.youtube.com/playlist?list=PLHWcjlt7orKatklEck5O4SWPp1t2mglyr">overview playlist</a> <br>

<h2>Contributing</h2>
Contributions are welcome! If you have suggestions or improvements, feel free to submit a pull request or open an issue.

<h2 align="left">SUPPORT ME :</h2>
<p><a href="https://ko-fi.com/ita27rmp100"> <img align="left" src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" height="50" width="210" alt="ita27rmp100" /></a></p><br><br>