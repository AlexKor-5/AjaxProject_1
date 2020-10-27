from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.http import require_POST
import json

def base(request):
	return render(request, "firs/index.html")

# @require_POST 
def test(request):
	
	if request.method == 'POST':
		if request.is_ajax():
			received_json_data=json.loads(request.body)
			received_json_data['name'] = 'other name'
			received_json_data['surname'] = 'other surname'
			response_data = json.dumps(received_json_data)
			
			response = JsonResponse(received_json_data)

			return response
	return HttpResponse("Request is not POST")
	
