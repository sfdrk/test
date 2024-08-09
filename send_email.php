<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect data from the form
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $action = $_POST['action'];

    // Always send email with the form data
    $to = "safdar.dxb070@gmail.com"; // Replace with the actual recipient's email address
    $subject = "New Contact Form Submission";
    $message = "Name: $name\nEmail: $email\nPhone: $phone";
    $headers = "From: $email";

    $emailSent = mail($to, $subject, $message, $headers);

    if ($emailSent) {
        // Check if the action is to download the brochure
        if ($action == 'Download Brochure') {
            // Path to the brochure PDF file
            $pdfFile = 'path/to/brochure.pdf'; // Replace with the actual path to your PDF file

            // Set headers to force download the PDF file
            header('Content-Type: application/pdf');
            header('Content-Disposition: attachment; filename="brochure.pdf"');
            header('Content-Length: ' . filesize($pdfFile));

            // Read the file and send it to the user
            readfile($pdfFile);
            exit;
        } else {
            echo "Thank you! Your message has been sent.";
        }
    } else {
        echo "There was an error sending your message. Please try again later.";
    }
}
?>
