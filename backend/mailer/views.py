# mailer/views.py

from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def send_email(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            subject = "Demo Request"
            message = (
                f"First name: {data['fname']}\n"
                f"Last name: {data['lname']}\n"
                f"Email: {data['wemail']}\n"
                f"Phone: {data['phone']}\n"
                f"Company: {data['company']}\n"
                f"Company size: {data['companySize']}\n"
                f"Country: {data['country']}\n"
                f"Reason: {data['reason']}\n"
                f"Other details: {data['otherDetails']}"
            )
            from_email = 'sara@foxmy.io'
            recipient_list = ['sara@foxmy.io']  # Change this to your email or list of recipients

            send_mail(subject, message, from_email, recipient_list)

            return JsonResponse({'status': 'success'}, status=200)
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=500)
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)
