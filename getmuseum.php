<?php
$query = "SELECT * FROM museum";
$result = mysqli_query($connection,$query);
  if (!$result) {
              die("databases query failed.");
                }
while ($row = mysqli_fetch_assoc($result)) {
               echo "<option value=" .$row[musID].">" . $row["musname"] . "</o
ption>";
              }
   mysqli_free_result($result);
?>
