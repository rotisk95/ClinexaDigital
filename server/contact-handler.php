<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
$required_fields = ['name', 'email', 'interest', 'privacyAgreed'];
foreach ($required_fields as $field) {
    if (!isset($data[$field]) || empty($data[$field])) {
        if ($field === 'privacyAgreed' && $data[$field] !== true) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Privacy agreement is required']);
            exit();
        }
        if ($field !== 'privacyAgreed') {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => "Field '$field' is required"]);
            exit();
        }
    }
}

// Validate email format
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email format']);
    exit();
}

// Service options mapping
$service_options = [
    'website' => 'Custom Medical Website',
    'appointment' => 'Appointment System',
    'forms' => 'Digital Patient Forms',
    'seo' => 'Local SEO for Medical Practices',
    'communication' => 'Patient Communication Tools',
    'hosting' => 'HIPAA-Compliant Hosting',
    'other' => 'Other/Multiple Services'
];

// Prepare email content
$to = 'noel.tiscareno@outlook.com';
$subject = 'New Contact Form Submission from ' . $data['name'];
$from_email = $data['email'];
$from_name = $data['name'];

// Create email body
$message = "New Contact Form Submission\n";
$message .= "==========================\n\n";
$message .= "Name: " . $data['name'] . "\n";
if (!empty($data['practice'])) {
    $message .= "Practice: " . $data['practice'] . "\n";
}
$message .= "Email: " . $data['email'] . "\n";
if (!empty($data['phone'])) {
    $message .= "Phone: " . $data['phone'] . "\n";
}
$message .= "Interested in: " . ($service_options[$data['interest']] ?? $data['interest']) . "\n";
if (!empty($data['message'])) {
    $message .= "\nMessage:\n" . $data['message'] . "\n";
}
$message .= "\n--\nThis message was sent from the Clinexa website contact form.";

// Email headers
$headers = [];
$headers[] = 'From: ' . $from_name . ' <' . $from_email . '>';
$headers[] = 'Reply-To: ' . $from_email;
$headers[] = 'X-Mailer: PHP/' . phpversion();
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

// Send email
$mail_sent = mail($to, $subject, $message, implode("\r\n", $headers));

if ($mail_sent) {
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your message. We\'ll get back to you soon.'
    ]);
} else {
    error_log('Failed to send contact form email');
    echo json_encode([
        'success' => false,
        'message' => 'There was an error sending your message. Please try again later.'
    ]);
}
?>