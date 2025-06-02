<?php
// Show errors directly in response
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Create error log in the same directory
$error_log = __DIR__ . '/form_errors.log';
ini_set('log_errors', 1);
ini_set('error_log', $error_log);

file_put_contents($error_log, "\n\n" . date('Y-m-d H:i:s') . " New request received\n", FILE_APPEND);

header('Content-Type: application/json');

// Log the request
error_log('Request received at: ' . date('Y-m-d H:i:s'));
error_log('POST data: ' . print_r($_POST, true));

// Database connection
// Log POST data
file_put_contents($error_log, "POST data: " . print_r($_POST, true) . "\n", FILE_APPEND);

try {
    file_put_contents($error_log, "Attempting database connection...\n", FILE_APPEND);
    $conn = new mysqli('localhost', 'root', '', 'rakesh');
    
    if ($conn->connect_error) {
        file_put_contents($error_log, "Database connection failed: " . $conn->connect_error . "\n", FILE_APPEND);
        throw new Exception('Database connection failed: ' . $conn->connect_error);
    }
    file_put_contents($error_log, "Database connection successful\n", FILE_APPEND);
} catch (Exception $e) {
    die(json_encode(['status' => 'error', 'message' => $e->getMessage()]));
}

// Log POST data
error_log('POST data: ' . print_r($_POST, true));

// Get form data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$mobile = $_POST['mobile'] ?? '';
$message = $_POST['message'] ?? '';

// Log variables
error_log("Data received: Name=$name, Email=$email, Mobile=$mobile");

// Prepare and execute query
error_log("Preparing query with values: name=$name, email=$email, mobile=$mobile");

$stmt = $conn->prepare("INSERT INTO text (name, `E-mail`, `mobile no.`, message) VALUES (?, ?, ?, ?)");
if (!$stmt) {
    error_log('Prepare failed: ' . $conn->error);
    throw new Exception('Prepare failed: ' . $conn->error);
}

$stmt->bind_param("ssss", $name, $email, $mobile, $message);
if ($stmt->error) {
    error_log('Bind failed: ' . $stmt->error);
    throw new Exception('Bind failed: ' . $stmt->error);
}

if ($stmt->execute()) {
    error_log("Data inserted successfully");
    echo json_encode(['status' => 'success', 'message' => 'Message sent successfully']);
} else {
    $error = $stmt->error;
    error_log("SQL Error: $error");
    echo json_encode(['status' => 'error', 'message' => 'Error: ' . $error]);
}

$stmt->close();
$conn->close();
