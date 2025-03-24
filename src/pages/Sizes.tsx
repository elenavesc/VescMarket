import React from "react";

function Sizes() {
    return (
        <div className="container mx-auto bg-white">
            <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 py-4 flex md:flex-col justify-between items-center flex justify-between">
                <h1 className="text-xl uppercase font-light tracking-widest">Nuestro sistema de tallas </h1>
            </div>
            {/* Primer bloque */}
            <div className="flex flex-col items-center mb-8 mt-4  p-4">
                <div className="w-full">
                    <video controls className="w-full rounded-lg shadow-lg">
                        <source src="video1.mp4" type="video/mp4" />
                        Tu navegador no soporta videos.
                    </video>
                </div>
                <div className="w-full p-4">
                    <p className="leading-relaxed">
                        En Vesc siempre hemos defendido que la moda es para todo tipo de cuerpos, y como una talla no debe limitarte, nuestras prendas siempre se confeccionan a medida.
                        Y la pregunta de todos ahora es: ¿Cómo pido una prenda a medida desde una tienda online?
                        Muy sencillo, siguiendo estos pasos:
                    </p>
                    <div className="p-4 gap-6 flex items-center">
                    <p className="text-5xl text-gray-400">
                        1
                    </p>
                    <p className="text-gray-800">Elige el diseño que más te guste o ponte en contacto con nosotros para que diseñemos una prenda a la altura de tu imaginación.</p>
                    </div>
                    <div className="p-4 gap-6 flex items-center">
                    <p className="text-5xl text-gray-400">
                        2
                    </p>
                    <p className="text-gray-800">Dentro del diseño seleccionado aparecerán las medidas necesarias para poder llevarla a cabo.</p>
                    </div>
                    <div className="p-4 gap-6 flex items-center">
                    <p className="text-5xl text-gray-400">
                        3
                    </p>
                    <p className="text-gray-800">Coge tu cinta métrica y toma las medidas como se indica en el siguiente vídeo. Y si no te queda claro, ponte en contacto con nosotros y estaremos encantados de ayudarte.</p>
                    </div>
                    <div className="p-4 gap-6 flex items-center">
                    <p className="text-5xl text-gray-400">
                        4
                    </p>
                    <p className="text-gray-800">Anota estas medidas y rellena la orden de pedido con estas.</p>
                    </div>
                    <div className="p-4 gap-6 flex items-center">
                    <p className="text-5xl text-gray-400">
                        5
                    </p>
                    <p className="text-gray-800">Si vemos que alguna medida no cuadra, no te preocupes, nos pondremos en contacto contigo para resolver cualquier duda.</p>
                    </div>
                    <div className="p-4 gap-6 flex items-center">
                    <p className="text-5xl text-gray-400">
                        6
                    </p>
                    <p className="text-gray-800">¡Listo! Tu pedido estará acabado en 7 días (excepto novias y bordados a mano)</p>
                    </div>
                    
                </div>
            </div>

            {/* Segundo bloque (invertido) */}
            <div className="flex flex-col items-center p-4">
                <div className="w-full">
                    <video controls className="w-full rounded-lg shadow-lg">
                        <source src="video2.mp4" type="video/mp4" />
                        Tu navegador no soporta videos.
                    </video>
                </div>
                <div className="w-full p-4">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Otro párrafo de texto que se sitúa en el lado contrario del video en pantallas grandes. En dispositivos móviles, todo se alinea en columna.
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Sizes;
