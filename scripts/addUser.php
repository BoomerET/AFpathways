<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "afpathways";
$gmail = $_GET['gmail'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO users user_gid FROM users WHERE user_email LIKE '" . $gmail . "'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo $row["user_gid"];
  }
} else {
  echo "0";
}
$conn->close();
?>