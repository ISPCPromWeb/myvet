from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404, get_list_or_404
from .models import Product, Client, Vaccine, Pet
from django.contrib.auth.models import User
from .serializers import ProductSerializer, PetSerializer, ClientSerializer, VaccineSerializer
from django.db.models import Q
from django.contrib.auth import login, logout
from .forms import EmailAuthenticationForm
from .auth_backends import EmailBackend

@api_view(['GET'])
def homepage(request):
    data = { 'message': 'Wololo' }
    return Response(data)

@api_view(['POST'])
def custom_register(request):
    email = request.POST["email"]
    password = request.POST["password"]
        
    user = Client(email=email, password=password)
    user.set_password(user.password)
    user.save()

    return Response({'message': 'User registered successfully'}, status=200)

@api_view(['POST'])
def custom_login(request):
    email = request.POST["email"]
    password = request.POST["password"]
    pub_date = request.POST["pub_date"]

    user = None

    try:
        user = User.objects.get(Q(email=email) | Q(username=email))
    except User.DoesNotExist:
        pass

    try:
        user = Client.objects.get(email=email)
    except Client.DoesNotExist:
        pass
    
    if user is None:
        user = Client(email=email, password=password, pub_date=pub_date)
        user.set_password(user.password)
        user.save()

    if user is not None:
        login(request, user, backend='myvet.auth_backends.EmailBackend')
        return Response({'message': 'User logged in successfully'}, status=200)
    else:
        return Response({'message': 'Error in login'}, status=400)

    
@api_view(['POST'])
def custom_logout(request):
    logout(request)
    return Response({'message': 'User logged out successfully'}, status=200)
        
class Pets_ApiView(APIView):
    def get(self, request):
        pet_type = request.query_params.get('petType', None)
        value = request.query_params.get('value', '')
        if pet_type is not None:
            data = Pet.objects.filter(type=pet_type)
        else:
            data = Pet.objects.filter(Q(name__icontains=value))
                
        serializer = PetSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PetSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Pet added successfully'}, status=200)

        return Response(serializer.errors, status=400)
    
class Pet_ApiView(APIView):
    def get(self, request, id):
        pet = get_list_or_404(Pet, id=id)
        serializer = PetSerializer(pet, many=True)
        return Response(serializer.data)
    
    def put(self, request, id):
        pet = get_object_or_404(Pet, id=id)
        serializer = PetSerializer(pet, data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Pet updated successfully'}, status=200)
            
        return Response(serializer.errors, status=400)
        
    def delete(self, request, id):
        pet = get_object_or_404(Pet, id=id)
        pet.delete()

        return Response({'message': 'Pet removed successfully'}, status=200)
    
class Products_ApiView(APIView):
    def get(self, request):
        product_type = request.query_params.get('productType', None)
        product_pet_type = request.query_params.get('productPetType', None)
        value = request.query_params.get('value', '')
        if product_type is not None and product_pet_type is not None:
            data = Product.objects.filter(Q(type=product_type) | Q(pet_type=product_pet_type) | Q(name__icontains=value) | Q(description__icontains=value))
        else:
            data = Product.objects.filter(Q(name__icontains=value) | Q(description__icontains=value))
                
        serializer = ProductSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Product added successfully'}, status=200)

        return Response(serializer.errors, status=400)
    
class Product_ApiView(APIView):
    def get(self, request, id):
        product = get_list_or_404(Product, id=id)
        serializer = ProductSerializer(product, many=True)
        return Response(serializer.data)
    
    def put(self, request, id):
        product = get_object_or_404(Product, id=id)
        serializer = ProductSerializer(product, data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Product updated successfully'}, status=200)
            
        return Response(serializer.errors, status=400)
        
    def delete(self, request, id):
        product = get_object_or_404(Product, id=id)
        product.delete()

        return Response({'message': 'Product removed successfully'}, status=200)
    
class Clients_ApiView(APIView):
    def get(self, request):
        value = request.query_params.get('value', '')
        data = Client.objects.filter(Q(name__icontains=value) | Q(surname__icontains=value) | Q(dni__icontains=value))
                
        serializer = ClientSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ClientSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User added successfully'}, status=200)

        return Response(serializer.errors, status=400)
    
class Client_ApiView(APIView):
    def get(self, request, id):
        user = get_list_or_404(Client, id=id)
        serializer = ClientSerializer(user, many=True)
        return Response(serializer.data)
    
    def put(self, request, id):
        user = get_object_or_404(Client, id=id)
        serializer = ClientSerializer(user, data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Client updated successfully'}, status=200)
            
        return Response(serializer.errors, status=400)
        
    def delete(self, request, id):
        user = get_object_or_404(Client, id=id)
        user.delete()

        return Response({'message': 'Client removed successfully'}, status=200)
    
class Vaccines_ApiView(APIView):
    def get(self, request):
        vaccine_type = request.query_params.get('vaccineType', None)
        if vaccine_type is None:
            data = Vaccine.objects.filter(type=vaccine_type)
        else:
            data = Vaccine.objects.all()
                
        serializer = VaccineSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VaccineSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User added successfully'}, status=200)

        return Response(serializer.errors, status=400)
    
class Vaccine_ApiView(APIView):
    def get(self, request, id):
        vaccine = get_list_or_404(Vaccine, id=id)
        serializer = VaccineSerializer(vaccine, many=True)
        return Response(serializer.data)
    
    def put(self, request, id):
        vaccine = get_object_or_404(Vaccine, id=id)
        serializer = VaccineSerializer(vaccine, data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Vaccine updated successfully'}, status=200)
            
        return Response(serializer.errors, status=400)
        
    def delete(self, request, id):
        vaccine = get_object_or_404(Vaccine, id=id)
        vaccine.delete()

        return Response({'message': 'Vaccine removed successfully'}, status=200)