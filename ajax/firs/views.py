from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.http import require_POST

def base(request):
	return render(request, "firs/index.html")

# @require_POST 
def test(request):
	if request.method == 'POST':
		if request.is_ajax():
			return JsonResponse("Success")
		else:
			return HttpResponse("Request is not ajax")
	return HttpResponse("Request is not POST")
	
