from django.db import models

class Profesor(models.Model):
    nombre = models.CharField(max_length=50)
    # Otros campos relevantes del profesor

    def __str__(self):
        return self.nombre

class Curso(models.Model):
    codigo = models.CharField(primary_key=True, max_length=6)
    nombre = models.CharField(max_length=50)
    creditos = models.PositiveSmallIntegerField()
    descripcion = models.TextField(default='Sobre el curso')  # Cambia este valor según sea necesario
    fecha_inicio = models.DateField(null=True, blank=True)
    fecha_finalizacion = models.DateField(null=True, blank=True)
    imagen = models.ImageField(upload_to='curso_imagenes/', null=True, blank=True)
    profesor = models.ForeignKey(Profesor, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        texto = '{0} ({1})'
        return texto.format(self.nombre, self.creditos)

