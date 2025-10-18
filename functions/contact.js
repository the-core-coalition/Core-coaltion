export async function onRequestPost(context) {
  const formData = await context.request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Log the submission
  console.log(`New message from ${name} (${email}): ${message}`);

  // Return a success response
  return new Response(
    JSON.stringify({ success: true, message: "Message received! We'll contact you soon." }),
    { headers: { "Content-Type": "application/json" } }
  );
}
