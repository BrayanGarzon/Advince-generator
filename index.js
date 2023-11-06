// Obtener elementos del DOM
const adviceId = document.getElementById('adviceId');
const adviceText = document.getElementById('adviceText');
const getAdviceButton = document.getElementById('getAdviceButton');

// Función para obtener consejos de la API
async function getAdvice() {
  try {
    const response = await axios.get('https://api.adviceslip.com/advice');
    console.log('Datos de la API:', response.data);

    if (response.data && response.data.slip) {
      const advice = response.data.slip;
      adviceId.textContent = advice.id;
      adviceText.textContent = advice.advice;
    } else {
      console.error('Datos inesperados en la respuesta de la API');
    }
  } catch (error) {
    console.error('Error al obtener el consejo', error);
  }
}

// Asignar evento click al botón para obtener consejos
getAdviceButton.addEventListener('click', getAdvice);

// Llamar a la función para obtener consejos al cargar la página
getAdvice();

