from django.shortcuts import render
from django.http import JsonResponse, HttpResponse, Http404
from django.views.decorators.http import require_POST
import json

def base(request):
	return render(request, "firs/index.html")

@require_POST 
def test(request):
	received_json_data=json.loads(request.body)
	received_json_data['name'] = received_json_data['name']+' '+'Server'
	received_json_data['surname'] = received_json_data['surname']+' '+'Server'
	response_data = json.dumps(received_json_data)		
	response = JsonResponse(received_json_data)
	return response