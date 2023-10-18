var personajes = [
    {
        nombre: "Astra",
        descripcion: "La agente ghanesa Astra canaliza las energías del cosmos para remodelar los campos de batalla a su antojo. Con pleno dominio de su forma astral y un talento para una profunda previsión estratégica, siempre está eones por delante del próximo movimiento de su enemigo.",
        imagen: "/src/Valorant/Personajes/Astra/Astra.png",
        habilidades: [
            {
                nombre: "Habilidad 1",
                descripcion: "Coloca estrellas en Modo Astral (X) ACTIVA una estrella para formar un Pozo Gravitacional. Los jugadores en el área son atraídos hacia el centro antes de que estalle, lo que causa que todos los jugadores que aún siguen atrapados se vuelvan frágiles.",
                icono: "/src/Valorant/Personajes/Astra/Habs/C_Astra.webp",
                img: "/src/Valorant/Personajes/Astra/Habs/C_Astra_Hab.webp"
            },
            {
                nombre: "Habilidad 2",
                descripcion: "Coloca estrellas en Modo Astral (X) ACTIVA una estrella para detonar un Pulso Estelar. El Pulso Estelar carga brevemente y luego ataca, lo que aturde a todos los jugadores en el área.",
                icono: "/src/Valorant/Personajes/Astra/Habs/Q_Astra.webp",
                img: "/src/Valorant/Personajes/Astra/Habs/Q_Astra_Hab.webp"
            },
            {
                nombre: "Habilidad 3",
                descripcion: "Coloca estrellas en Modo Astral (tecla de definitiva). ACTIVA una estrella para transformarla en una Nebulosa (humo). USA una estrella para Disiparla, lo que devuelve la estrella para colocarla en una nueva ubicación después de un momento. Disipar forma una Nebulosa falsa brevemente en la ubicación de la estrella antes de regresar.",
                icono: "/src/Valorant/Personajes/Astra/Habs/E_Astra.webp",
                img: "/src/Valorant/Personajes/Astra/Habs/E_Astra_Hab.webp"
            },
            {
                nombre: "Habilidad 4",
                descripcion: "Cuando División Cósmica esté cargada, usa el DISPARO SECUNDARIO en Modo Astral para apuntarla, luego el DISPARO PRINCIPAL para elegir dos ubicaciones. Una División Cósmica infinita conecta los dos puntos que elegiste. División Cósmica bloquea las balas y amortigua considerablemente el audio.",
                icono: "/src/Valorant/Personajes/Astra/Habs/X_Astra.webp",
                img: "/src/Valorant/Personajes/Astra/Habs/X_Astra_Hab.webp"
            },
        ]
    },
    {
        nombre: "Breach",
        descripcion: "Breach, el sueco biónico, lanza poderosas ráfagas cinéticas para abrirse paso a la fuerza a través del territorio enemigo. El daño y la interrupción que inflige garantizarán que ninguna pelea sea justa.",
        imagen: "/src/Valorant/Personajes/Breach/Breach.png",
        habilidades: [
            {
                nombre: "Habilidad 1",
                descripcion: "EQUIPA una carga de fusión y DISPARA para lanzar una ráfaga de acción lenta a través de una pared. La ráfaga infligirá daño masivo a todos los que estén en su alcance.",
                icono: "/src/Valorant/Personajes/Breach/Habs/C_Breach.webp",
                img: "/src/Valorant/Personajes/Breach/Habs/C_Breach_Hab.webp"
            },
            {
                nombre: "Habilidad 2",
                descripcion: "EQUIPA una carga cegadora y DISPARA para lanzar una ráfaga de acción rápida a través de una pared. La carga detonará y cegará a todos los jugadores que la vean.",
                icono: "/src/Valorant/Personajes/Breach/Habs/Q_Breach.webp",
                img: "/src/Valorant/Personajes/Breach/Habs/Q_Breach_Hab.webp"
            },
            {
                nombre: "Habilidad 3",
                descripcion: "EQUIPA un rayo sísmico y MANTÉN PRESIONADO EL BOTÓN DE DISPARO para aumentar la distancia. SUÉLTALO para iniciar el temblor y aturdir a todos los jugadores que estén en la zona.",
                icono: "/src/Valorant/Personajes/Breach/Habs/E_Breach.webp",
                img: "/src/Valorant/Personajes/Breach/Habs/E_Breach_Hab.webp"
            },
            {
                nombre: "Habilidad 4",
                descripcion: "EQUIPA una carga sísmica y DISPARA para enviar un temblor en cascada por una gran zona cónica. El temblor aturde y lanza por el aire a todos los que impacta.",
                icono: "/src/Valorant/Personajes/Breach/Habs/X_Breach.webp",
                img: "/src/Valorant/Personajes/Breach/Habs/X_Breach_Hab.webp"
            },
        ]
    },
    {
        nombre: "Brimstone",
        descripcion: "Proveniente de Estados Unidos, Brimstone proporciona una constante ventaja para su equipo con su arsenal orbital. Su habilidad otorga información de forma precisa y a distancia, lo que lo hace un comandante sin igual en el campo.",
        imagen: "/src/Valorant/Personajes/Brimstone/Brimstone.png",
        habilidades: [
            {
                nombre: "Habilidad 1",
                descripcion: "EQUIPA una baliza potenciadora y DISPARA para lanzarla frente a Brimstone. Al caer, Resguardo Potenciador creará un campo que aumenta la velocidad de disparo de los jugadores.",
                icono: "/src/Valorant/Personajes/Brimstone/Habs/C_Brimstone.webp",
                img: "/src/Valorant/Personajes/Brimstone/Habs/C_Brimstone_Hab.webp"
            },
            {
                nombre: "Habilidad 2",
                descripcion: "EQUIPA un lanzagranadas incendiario y DISPARA para lanzar una granada que explota cuando se detiene en el suelo. Esta crea una zona de fuego que permanece en el campo y daña a los enemigos que estén dentro de ella.",
                icono: "/src/Valorant/Personajes/Brimstone/Habs/Q_Brimstone.webp",
                img: "/src/Valorant/Personajes/Brimstone/Habs/Q_Brimstone_Hab.webp"
            },
            {
                nombre: "Habilidad 3",
                descripcion: "EQUIPA un mapa táctico y DISPARA para marcar las ubicaciones en las que caerán las nubes de humo de Brimstone. Usa el DISPARO SECUNDARIO para confirmar y lanzar nubes de humo duraderas que bloquearán la visión en la zona seleccionada.",
                icono: "/src/Valorant/Personajes/Brimstone/Habs/E_Brimstone.webp",
                img: "/src/Valorant/Personajes/Brimstone/Habs/E_Brimstone_Hab.webp"
            },
            {
                nombre: "Habilidad 4",
                descripcion: "EQUIPA un mapa estratégico y DISPARA para lanzar un ataque orbital prolongado de un láser en la ubicación seleccionada. Este infligirá daño masivo con el tiempo a los jugadores que estén en la zona.",
                icono: "/src/Valorant/Personajes/Brimstone/Habs/X_Brimstone.webp",
                img: "/src/Valorant/Personajes/Brimstone/Habs/X_Brimstone_Hab.webp"
            },
        ]
    },
    {
        nombre: "Chamber",
        descripcion: "Bien vestido y bien armado, el diseñador de armas francés Chamber repele agresores con una precisión mortal. Aprovecha su arsenal personalizado para mantener a los enemigos a raya y eliminarlos desde lejos. Siempre cuenta con la contingencia perfecta para cada plan.",
        imagen: "/src/Valorant/Personajes/Chamber/Chamber.png",
        habilidades: [
            {
                nombre: "Habilidad 1",
                descripcion: "EQUIPA una trampa que escanea los alrededores buscando enemigos. DISPARA para colocarlo en el suelo. Cuando un enemigo visible entra en contacto, esta comienza una cuenta regresiva que, al terminar, desestabiliza el terreno a su alrededor y crea un área que permanece en la zona y ralentiza a los enemigos dentro de ella. Puedes recoger la trampa para VOLVER A COLOCARLA en otro lugar.",
                icono: "/src/Valorant/Personajes/Chamber/Habs/C_Chamber.webp",
                img: "/src/Valorant/Personajes/Chamber/Habs/C_Chamber_Hab.webp"
            },
            {
                nombre: "Habilidad 2",
                descripcion: "ACTÍVALA para equipar una pistola pesada. Presiona DISPARO SECUNDARIO con la pistola equipada para usar la mira.",
                icono: "/src/Valorant/Personajes/Chamber/Habs/Q_Chamber.webp",
                img: "/src/Valorant/Personajes/Chamber/Habs/Q_Chamber_Hab.webp"
            },
            {
                nombre: "Habilidad 3",
                descripcion: "EQUIPA un anclaje de teletransportación. DISPARA para colocarlo en el suelo. Mientras estés en el suelo y dentro de su zona de alcance, REACTIVA para teletransportarte rápidamente al anclaje. Puedes recoger el anclaje para VOLVER A COLOCARLO en otro lugar.",
                icono: "/src/Valorant/Personajes/Chamber/Habs/E_Chamber.webp",
                img: "/src/Valorant/Personajes/Chamber/Habs/E_Chamber_Hab.webp"
            },
            {
                nombre: "Habilidad 4",
                descripcion: "ACTIVA para invocar un poderoso rifle de francotirador personalizado que mata a un enemigo con cualquier impacto directo en la parte superior del cuerpo. Usa el DISPARO SECUNDARIO para apuntar con la mira. Matar a un enemigo crea un área que permanece en la zona y ralentiza a los jugadores que queden dentro de ella.",
                icono: "/src/Valorant/Personajes/Chamber/Habs/X_Chamber.webp",
                img: "/src/Valorant/Personajes/Chamber/Habs/X_Chamber_Hab.webp"
            },
        ]
    },
    {
        nombre: "Cypher",
        descripcion: "Cypher, el agente de información marroquí, es un sistema de vigilancia de un solo hombre que puede monitorear todos los movimientos de sus enemigos. No hay secreto que no descubra ni maniobra que no detecte. Cypher siempre está vigilando.",
        imagen: "/src/Valorant/Personajes/Cypher/Cypher.png",
        habilidades: [
            {
                nombre: "Habilidad 1",
                descripcion: "EQUIPA un cable trampa. DISPARA para colocar un cable trampa en la ubicacion, si un enemigo pasa por encima del cable lo revelaras y si no rompe el cable, lo desorientaras.",
                icono: "/src/Valorant/Personajes/Cypher/Habs/C_Cypher.webp",
                img: "/src/Valorant/Personajes/Cypher/Habs/C_Cypher_Hab.webp"
            },
            {
                nombre: "Habilidad 2",
                descripcion: "Lanza AL INSTANTE una ciberjaula frente a Cypher. Actívala para crear una zona que bloquea la visión y ralentiza a los enemigos que la atraviesan.",
                icono: "/src/Valorant/Personajes/Cypher/Habs/Q_Cypher.webp",
                img: "/src/Valorant/Personajes/Cypher/Habs/Q_Cypher_Hab.webp"
            },
            {
                nombre: "Habilidad 3",
                descripcion: "EQUIPA una cámara espía. DISPARA para colocarla en la ubicación seleccionada. VUELVE A USAR esta habilidad para tomar el control de la vista de la cámara. Mientras la controlas, DISPARA para lanzar un dardo marcador que revelará la ubicación de cualquier jugador al que impacte.",
                icono: "/src/Valorant/Personajes/Cypher/Habs/E_Cypher.webp",
                img: "/src/Valorant/Personajes/Cypher/Habs/E_Cypher_Hab.webp"
            },
            {
                nombre: "Habilidad 4",
                descripcion: "Apunta hacia un jugador enemigo muerto y úsalo DE INMEDIATO para revelar la ubicación de todos los jugadores enemigos con vida.",
                icono: "/src/Valorant/Personajes/Cypher/Habs/X_Cypher.webp",
                img: "/src/Valorant/Personajes/Cypher/Habs/X_Cypher_Hab.webp"
            },
        ]
    },
    {
        nombre: "DeadLock",
        descripcion: "La agente noruega Deadlock despliega una variedad de nanocables de alta tecnología para asegurar el campo de batalla, incluso en los asaltos más letales. Nadie escapa de su ojo vigilante ni sobrevive a su ferocidad inquebrantable.",
        imagen: "/src/Valorant/Personajes/DeadLock/DeadLock.png",
        habilidades: [
            {
                nombre: "Habilidad 1",
                descripcion: "EQUIPA una granada GravNet. DISPARA para lanzarla. Usa el DISPARO SECUNDARIO para lanzar la granada por debajo. La granada GravNet explota al caer y fuerza a los enemigos que se encuentren en la zona a agacharse y a moverse con lentitud.",
                icono: "/src/Valorant/Personajes/DeadLock/Habs/C_DeadLock.webp",
                img: "/src/Valorant/Personajes/DeadLock/Habs/C_DeadLock_Hab.webp"
            },
            {
                nombre: "Habilidad 2",
                descripcion: "EQUIPA un Sensor Sónico. DISPARA para desplegarlo. El sensor vigila un área en busca de enemigos que emitan sonidos. Conmociona la zona si detecta pisadas, disparos o una cantidad de ruido significativa.",
                icono: "/src/Valorant/Personajes/DeadLock/Habs/Q_DeadLock.webp",
                img: "/src/Valorant/Personajes/DeadLock/Habs/Q_DeadLock_Hab.webp"
            },
            {
                nombre: "Habilidad 3",
                descripcion: "EQUIPA un disco de Malla Protectora. DISPARA para lanzarlo hacia adelante. Al caer, el disco genera barreras desde el punto de origen que bloquean el movimiento de los personajes.",
                icono: "/src/Valorant/Personajes/DeadLock/Habs/E_DeadLock.webp",
                img: "/src/Valorant/Personajes/DeadLock/Habs/E_DeadLock_Hab.webp"
            },
            {
                nombre: "Habilidad 4",
                descripcion: "EQUIPA un Acelerador de Nanocables. DISPARA para liberar un pulso de nanocables que capturan al primer enemigo con el que entren en contacto. El enemigo atrapado es arrastrado por un sendero de nanocables y morirá si llega al final, a menos que se libere antes. El capullo de nanocables puede ser destruido.",
                icono: "/src/Valorant/Personajes/DeadLock/Habs/X_DeadLock.webp",
                img: "/src/Valorant/Personajes/DeadLock/Habs/X_DeadLock_Hab.webp"
            },
        ]
    },
    {
        nombre: "Fade",
        descripcion: "Fade, la cazarrecompensas turca, desata el poder de las pesadillas para apoderarse de los secretos del enemigo. En armonía con el terror puro, acecha a sus objetivos y revela sus miedos más profundos antes de aplastarlos en la oscuridad.",
        imagen: "/src/Valorant/Personajes/Fade/Fade.png",
        habilidades: [
            {
                nombre: "Habilidad 1",
                descripcion: "EQUIPA una Acechadora. DISPARA para lanzar a la Acechadora, que viajará en línea recta. La Acechadora se enfocará en cualquier enemigo o rastro en su cono de visión frontal y lo perseguirá y ofuscará si lo alcanza. MANTÉN PRESIONADO el botón de DISPARO para guiar a la Acechadora en la dirección de tu retícula.",
                icono: "/src/Valorant/Personajes/Fade/Habs/C_Fade.webp",
                img: "/src/Valorant/Personajes/Fade/Habs/C_Fade_Hab.webp"
            },
            {
                nombre: "Habilidad 2",
                descripcion: "Equipa un orbe de tinta de las pesadillas. DISPARA para lanzar el orbe, el cual caerá en picada al suelo después de un tiempo determinado. Al impactar contra el suelo, la tinta explotará y creará una zona en la que los enemigos que queden atrapados en ella no podrán escapar por medios normales. VUELVE A USAR la habilidad para dejar caer el proyectil anticipadamente mientras vuela.",
                icono: "/src/Valorant/Personajes/Fade/Habs/Q_Fade.webp",
                img: "/src/Valorant/Personajes/Fade/Habs/Q_Fade_Hab.webp"
            },
            {
                nombre: "Habilidad 3",
                descripcion: "Equipa una entidad de las pesadillas. DISPARA para lanzar el orbe, el cual caerá en picada al suelo después de un tiempo determinado. Al impactar contra el suelo, el orbe se convertirá en un ente de las pesadillas que revelará la ubicación de los enemigos en su línea de visión. Los enemigos pueden destruir esta entidad. VUELVE A USAR la habilidad para dejar caer el proyectil anticipadamente mientras vuela.",
                icono: "/src/Valorant/Personajes/Fade/Habs/E_Fade.webp",
                img: "/src/Valorant/Personajes/Fade/Habs/E_Fade_Hab.webp"
            },
            {
                nombre: "Habilidad 4",
                descripcion: "EQUIPA el poder del Miedo. DISPARA para lanzar una onda de energía de las pesadillas que puede atravesar paredes. La energía crea un rastro hacia el oponente, además de ensordecerlo y debilitarlo.",
                icono: "/src/Valorant/Personajes/Fade/Habs/X_Fade.webp",
                img: "/src/Valorant/Personajes/Fade/Habs/X_Fade_Hab.webp"
            },
        ]
    },
    {
        nombre: "Harbor",
        descripcion: "Originario de las costas de la India, Harbor arrasa el campo de batalla utilizando tecnología ancestral que controla el agua. Desata corrientes furiosas y olas aplastantes para escudar aliados y apalear oponentes.",
        imagen: "/src/Valorant/Personajes/Harbor/Harbor.png",
        habilidades: [
            {
                nombre: "Habilidad 1",
                descripcion: "EQUIPA una ola de agua. DISPARA para lanzar la ola hacia adelante y a través de los muros. REUTILÍZALA para detener el avance de la ola. Los jugadores impactados quedan RALENTIZADOS.",
                icono: "/src/Valorant/Personajes/Harbor/Habs/C_Harbor.webp",
                img: "/src/Valorant/Personajes/Harbor/Habs/C_Harbor_Hab.webp"
            },
            {
                nombre: "Habilidad 2",
                descripcion: "EQUIPA una esfera de agua protectora. DISPARA para lanzar. Usa el DISPARO SECUNDARIO para lanzar por abajo. Al impactar contra el suelo, genera un escudo de agua destructible que bloquea balas.",
                icono: "/src/Valorant/Personajes/Harbor/Habs/Q_Harbor.webp",
                img: "/src/Valorant/Personajes/Harbor/Habs/Q_Harbor_Hab.webp"
            },
            {
                nombre: "Habilidad 3",
                descripcion: "EQUIPA un muro de agua. DISPARA para enviar el agua hacia adelante por el suelo. MANTÉN PRESIONADO EL DISPARO para guiar el agua en la dirección de tu retícula, y genera un muro a lo largo de la trayectoria del agua. Puede atravesar paredes. Usa el DISPARO SECUNDARIO mientras curvas el muro para detener su trayectoria anticipadamente. Los jugadores impactados quedan RALENTIZADOS.",
                icono: "/src/Valorant/Personajes/Harbor/Habs/E_Harbor.webp",
                img: "/src/Valorant/Personajes/Harbor/Habs/E_Harbor_Hab.webp"
            },
            {
                nombre: "Habilidad 4",
                descripcion: "EQUIPA todo el poder de tu artefacto. DISPARA para invocar una zona de géiseres en el suelo. Los enemigos que se encuentren en la zona serán el objetivo de varios impactos sucesivos de géiseres. Los jugadores que reciban un impacto quedarán CONMOCIONADOS.",
                icono: "/src/Valorant/Personajes/Harbor/Habs/X_Harbor.webp",
                img: "/src/Valorant/Personajes/Harbor/Habs/X_Harbor_Hab.webp"
            },
        ]
    },
    {
        nombre: "Jett",
        descripcion: "Proviene de Corea del Sur. El ágil y evasivo estilo de pelea de Jett le permite enfrentarse a riesgos que otros no pueden. Es imparable en todos los enfrentamientos y acaba con sus enemigos antes de que sepan qué los atacó.",
        imagen: "/src/Valorant/Personajes/Jett/Jett.png",
        habilidades: [
            {
                nombre: "Habilidad 1",
                descripcion: "Lanza un proyectil AL INSTANTE que se convierte en una nube que bloquea la visión al impactar alguna superficie. MANTÉN PRESIONADA la tecla de la habilidad para cambiar la trayectoria del humo hacia donde apuntes.",
                icono: "/src/Valorant/Personajes/Jett/Habs/C_Jett.webp",
                img: "/src/Valorant/Personajes/Jett/Habs/C_Jett_Hab.webp"
            },
            {
                nombre: "Habilidad 2",
                descripcion: "Propulsa a Jett hacia el aire AL INSTANTE.",
                icono: "/src/Valorant/Personajes/Jett/Habs/Q_Jett.webp",
                img: "/src/Valorant/Personajes/Jett/Habs/Q_Jett_Hab.webp"
            },
            {
                nombre: "Habilidad 3",
                descripcion: "ACTIVA para preparar una ráfaga de viento durante un tiempo limitado. VUELVE A USAR el viento para propulsar a Jett en la dirección a la que se dirige. Si no se está moviendo, se propulsará hacia adelante. La carga de Impulso Ciclón se restablece cada dos asesinatos.",
                icono: "/src/Valorant/Personajes/Jett/Habs/E_Jett.webp",
                img: "/src/Valorant/Personajes/Jett/Habs/E_Jett_Hab.webp"
            },
            {
                nombre: "Habilidad 4",
                descripcion: "EQUIPA un conjunto de cuchillos arrojadizos de gran precisión. DISPARA para lanzar un cuchillo y recarga los cuchillos al asesinar a un oponente. Usa el DISPARO SECUNDARIO para lanzar todos los cuchillos restantes, pero no se recargan al matar a un oponente.",
                icono: "/src/Valorant/Personajes/Jett/Habs/X_Jett.webp",
                img: "/src/Valorant/Personajes/Jett/Habs/X_Jett_Hab.webp"
            },
        ]
    },
    {
        nombre: "KAYO",
        descripcion: "KAY/O es una máquina de guerra construida para un único propósito: neutralizar radiantes. Su poder para suprimir las habilidades del enemigo anula la capacidad de sus oponentes para contraatacar, lo que les asegura a él y a sus aliados la ventaja definitiva.",
        imagen: "/src/Valorant/Personajes/KAYO/KAYO.png",
        habilidades: [
            {
                nombre: "Habilidad 1",
                descripcion: "EQUIPA un fragmento explosivo. DISPARA para lanzarlo. El fragmento se pega al piso y explota varias veces, lo que inflige daño casi mortal en el centro con cada explosión.",
                icono: "/src/Valorant/Personajes/KAYO/Habs/C_KAYO.webp",
                img: "/src/Valorant/Personajes/KAYO/Habs/C_KAYO_Hab.webp"
            },
            {
                nombre: "Habilidad 2",
                descripcion: "EQUIPA una granada cegadora. DISPARA para lanzarla por encima. Usa el DISPARO SECUNDARIO para lanzar una versión más débil que explota rápidamente. La granada cegadora explota luego de un corto tiempo y ciega a cualquiera que esté en la línea de visión.",
                icono: "/src/Valorant/Personajes/KAYO/Habs/Q_KAYO.webp",
                img: "/src/Valorant/Personajes/KAYO/Habs/Q_KAYO_Hab.webp"
            },
            {
                nombre: "Habilidad 3",
                descripcion: "EQUIPA una cuchilla supresora. DISPARA para lanzarla. La cuchilla se adhiere a la primera superficie que toca para activarse y suprimir a cualquiera dentro del radio de explosión. Los enemigos pueden destruir la cuchilla.",
                icono: "/src/Valorant/Personajes/KAYO/Habs/E_KAYO.webp",
                img: "/src/Valorant/Personajes/KAYO/Habs/E_KAYO_Hab.webp"
            },
            {
                nombre: "Habilidad 4",
                descripcion: "Se sobrecarga INSTANTÁNEAMENTE con energía polarizada de radianita que emana de KAY/O en un radio masivo. Los enemigos impactados por las ondas de energía quedan suprimidos durante un breve periodo. Mientras está sobrecargado, KAY/O obtiene Potenciador de combate y se puede volver a estabilizar si lo derriban.",
                icono: "/src/Valorant/Personajes/KAYO/Habs/X_KAYO.webp",
                img: "/src/Valorant/Personajes/KAYO/Habs/X_KAYO_Hab.webp"
            },
        ]
    },
    {
        nombre: "Yoru",
        descripcion: "El nativo de Japón, Yoru, fractura la realidad para infiltrarse en las líneas enemigas sin ser visto. Con engaños y agresividad por igual, sorprende a sus objetivos antes de que sepan dónde buscarlo.",
        imagen: "/src/Valorant/Personajes/Yoru/Yoru.png",
        habilidades: [
            {
                nombre: "Habilidad 1",
                descripcion: "EQUIPA un eco que imita el sonido de pisadas cuando se activa. DISPARA para activarlo y enviar el eco hacia adelante. Usa el DISPARO SECUNDARIO para colocar un eco en el lugar. USA el eco inactivo para enviarlo hacia adelante.",
                icono: "/src/Valorant/Personajes/Yoru/Habs/C_Yoru.webp",
                img: "/src/Valorant/Personajes/Yoru/Habs/C_Yoru_Hab.webp"
            },
            {
                nombre: "Habilidad 2",
                descripcion: "EQUÍPALO para arrancar un fragmento dimensional inestable de la realidad. DISPARA para lanzar el fragmento, lo que activa un destello que se disipa al impactar con una superficie sólida.",
                icono: "/src/Valorant/Personajes/Yoru/Habs/Q_Yoru.webp",
                img: "/src/Valorant/Personajes/Yoru/Habs/Q_Yoru_Hab.webp"
            },
            {
                nombre: "Habilidad 3",
                descripcion: "EQUIPA un vínculo dimensional. DISPARA para lanzar el vínculo hacia adelante. Usa el DISPARO SECUNDARIO para colocar un vínculo en el lugar. ACTÍVALO para teletransportarte a la ubicación del vínculo. ÚSALO para activar una teletransportación falsa.",
                icono: "/src/Valorant/Personajes/Yoru/Habs/E_Yoru.webp",
                img: "/src/Valorant/Personajes/Yoru/Habs/E_Yoru_Hab.webp"
            },
            {
                nombre: "Habilidad 4",
                descripcion: "EQUIPA una máscara para ver entre dimensiones. DISPARA para entrar a la dimensión de Yoru, donde los enemigos no pueden verte ni afectarte. REACTÍVALO para salir anticipadamente de la dimensión de Yoru.",
                icono: "/src/Valorant/Personajes/Yoru/Habs/X_Yoru.webp",
                img: "/src/Valorant/Personajes/Yoru/Habs/X_Yoru_Hab.webp"
            },
        ]
    }
];

var indicePersonajeActual = 0;
// Función para actualizar la información del personaje en la carta
function actualizarCartaPersonaje() {
    var nombrePersonaje = document.querySelector('.informacion-personaje h2');
    var descripcionPersonaje = document.querySelector('.informacion-personaje p');
    var imagenPersonaje = document.querySelector('.imagen-personaje img');
    var habilidades = document.querySelectorAll('.habilidad');

    var personajeActual = personajes[indicePersonajeActual];

    nombrePersonaje.textContent = personajeActual.nombre;
    descripcionPersonaje.textContent = personajeActual.descripcion;
    imagenPersonaje.src = personajeActual.imagen;

    // Actualiza las habilidades
    habilidades.forEach(function (habilidad, index) {
        var iconoHabilidad = habilidad.querySelector('img');
        var descripcionHabilidad = document.querySelector('#detalle-habilidad-' + (index + 1) + ' p');
        var imgHabilidad = document.querySelector('#detalle-habilidad-' + (index + 1) + ' img');

        var habilidadActual = personajeActual.habilidades[index];

        iconoHabilidad.src = habilidadActual.icono;
        descripcionHabilidad.textContent = habilidadActual.descripcion;
        imgHabilidad.src = habilidadActual.img;
    });
}
document.getElementById('anterior-personaje').addEventListener('click', function () {
    indicePersonajeActual = (indicePersonajeActual - 1 + personajes.length) % personajes.length;
    actualizarCartaPersonaje();
});
document.getElementById('siguiente-personaje').addEventListener('click', function () {
    indicePersonajeActual = (indicePersonajeActual + 1) % personajes.length;
    actualizarCartaPersonaje();
});
function toggleDetalleHabilidad(numero) {
    var detalleHabilidad = document.getElementById('detalle-habilidad-' + numero);
    var habilidadIcon = document.querySelector('.habilidad:nth-child(' + numero + ')');

    if (detalleHabilidad.style.display === 'block') {
        detalleHabilidad.style.display = 'none';
        habilidadIcon.classList.remove('habilidad-activa');
    } else {
        // Oculta todos los detalles de habilidades
        var detalles = document.querySelectorAll('.detalle-habilidad');
        detalles.forEach(function (detalle) {
            detalle.style.display = 'none';
        });

        // Quita la clase 'habilidad-activa' de todos los iconos de habilidades
        var iconosHabilidad = document.querySelectorAll('.habilidad');
        iconosHabilidad.forEach(function (icono) {
            icono.classList.remove('habilidad-activa');
        });

        // Muestra el detalle de la habilidad seleccionada y marca como activo el icono
        detalleHabilidad.style.display = 'block';
        habilidadIcon.classList.add('habilidad-activa');
    }
}

actualizarCartaPersonaje();

// Define las categorías y las armas
var categorias = ["Pistolas", "Subfusiles", "Escopetas", "Rifles", "Francotiradores", "Ametralladoras Pesadas", "Cuerpo a Cuerpo"];
var armasPorCategoria = {
    "Pistolas": [
        { nombre: "Classic", imagen: "/src/Valorant/Armas/Pistolas/Classic.webp", descripcion: "El disparo principal realiza disparos precisos al estar quieto y tiene un modo de disparo alternativo para encuentros cercanos." },
        { nombre: "Shorty", imagen: "/src/Valorant/Armas/Pistolas/Shorty.webp", descripcion: "Una escopeta de cañón corto y ágil; letal a corta distancia, pero solo puede disparar dos veces antes de tener que recargarla. Se combina bien con las armas de largo alcance." },
        { nombre: "Frenzy", imagen: "/src/Valorant/Armas/Pistolas/Frenzy.webp", descripcion: "Ametralladora ligera que destaca al disparar en movimiento. Su alta velocidad de disparo puede llegar a ser difícil de controlar, así que prueba ráfagas cortas a media distancia." },
        { nombre: "Ghost", imagen: "/src/Valorant/Armas/Pistolas/Ghost.webp", descripcion: "La Ghost es precisa y tiene un gran cargador en caso de que falles. Los objetivos distantes requieren una tasa de fuego controlada. Presiona rápidamente el gatillo cuando veas lo blanco de sus ojos." },
        { nombre: "Sheriff", imagen: "/src/Valorant/Armas/Pistolas/Sheriff.webp", descripcion: "Sus balas de alto impacto tienen mucho retroceso y se necesitan muchas agallas para dominarlas. Si dominas la Sheriff correctamente, tus enemigos sabrán que no tenían oportunidad." },
    ],
    "Subfusiles": [
        { nombre: "Stinger", imagen: "/src/Valorant/Armas/Subfusiles/Stinger.webp", descripcion: "Este subfusil tiene mayor potencia a corta y larga distancia que los demás, pero a costa de velocidad de disparo y movilidad. Su cargador de 20 rondas se desperdicia en ráfagas llenas de retroceso, pero asesta golpes letales a media distancia con la mira y fuego controlado." },
        { nombre: "Spectre", imagen: "/src/Valorant/Armas/Subfusiles/Spectre.webp", descripcion: "Un arma todoterreno con gran equilibrio de daño, velocidad de disparo y precisión, tanto a corta como larga distancia. Acecha los rincones de cada mapa y solo requiere que apuntes firme para derribar a los enemigos a larga distancia." }
    ],
    "Escopetas": [
        { nombre: "Bucky", imagen: "/src/Valorant/Armas/Escopetas/Bucky.webp", descripcion: "Pesada, pero estable. El disparo principal de la Bucky es para mantener las esquinas cerradas o disparar a corta distancia. El disparo secundario sirve para los objetivos a medio alcance." },
        { nombre: "Judge", imagen: "/src/Valorant/Armas/Escopetas/Judge.webp", descripcion: "La Judge es estable con disparos premeditados, pero volátil si la disparas rápidamente. El disparo principal ataca a los objetivos a corta distancia y tendrás que ser firme para alcanzar todo lo que esté más allá de la longitud de tu brazo." },
    ],
    "Rifles": [
        { nombre: "Bulldog", imagen: "/src/Valorant/Armas/Rifles/Bulldog.webp", descripcion: "Es una bestia a la hora de intercambiar fuego. El disparo alternativo te permite utilizar una mira y lanzar ráfagas cortas y precisas a todo aquel que intente cazarte a media o larga distancia." },
        { nombre: "Guardian", imagen: "/src/Valorant/Armas/Rifles/Guardian.webp", descripcion: "Es el rifle para los tiradores entrenados. Más pesado y menos móvil en comparación con otros rifles, pero más preciso y potente. Comienza la cacería de tus enemigos a media y larga distancia." },
        { nombre: "Phantom", imagen: "/src/Valorant/Armas/Rifles/Phantom.webp", descripcion: "Úsala en automático contra cualquiera que te ponga a prueba de cerca. Por otro lado, sus ráfagas cortas y controladas permiten derribar enemigos a cualquier distancia. Funciona mejor cuando no estás en movimiento." },
        { nombre: "Vandal", imagen: "/src/Valorant/Armas/Rifles/Vandal.webp", descripcion: "El Vandal tiene un alto daño a distancia y recompensa a quienes se enfocan en un solo disparo a la cabeza. Sin embargo, su disparo extendido da como resultado menor estabilidad." },
    ],
    "Francotiradores": [
        { nombre: "Marshal", imagen: "/src/Valorant/Armas/Francotiradores/Marshal.webp", descripcion: "Un ágil rifle de palanca con un solo zoom que puede mantener a raya a los enemigos. Una velocidad de disparo lenta significa que tienes que dar en el blanco o quedarás expuesto a los ataques." },
        { nombre: "Operator", imagen: "/src/Valorant/Armas/Francotiradores/Operator.webp", descripcion: "Un rifle de francotirador con doble zoom de alta potencia. Extremadamente inmóvil, pero sus poderosas balas podrían devastar a un equipo con un solo disparo." },
    ],
    "Ametralladoras Pesadas": [
        { nombre: "Ares", imagen: "/src/Valorant/Armas/Ametralladoras Pesadas/Ares.webp", descripcion: "El enorme cargador del Ares significa que sobresale en el fuego continuo e inflige daño masivo a grupos de enemigos." },
        { nombre: "Odin", imagen: "/src/Valorant/Armas/Ametralladoras Pesadas/Odin.webp", descripcion: "Disparos continuos de alto daño con una gran estabilidad. Pulveriza a los enemigos a corta distancia y usa el disparo alternativo para convertirte en una torreta viviente." },
    ],
    "Cuerpo a Cuerpo": [
        { nombre: "Cuchillo Táctico", imagen: "/src/Valorant/Armas/Cuerpo a Cuerpo/Cuchillo.webp", descripcion: "Cuando tengas dudas o se te acaben las balas, atácalos con esto. Te permite correr rápido, destruir objetos o lanzárselo a los enemigos por la espalda con el disparo alternativo." },
    ]
};

var categoriaActual = "Pistolas"; // Inicialmente muestra las pistolas

// Función para actualizar la galería de armas
function actualizarGaleriaArmas() {
    var galeriaArmas = document.querySelector('.galeria-armas');
    galeriaArmas.innerHTML = '';

    armasPorCategoria[categoriaActual].forEach(function (arma) {
        var armaElement = document.createElement('div');
        armaElement.classList.add('arma');

        var nombreArma = document.createElement('h3');
        nombreArma.textContent = arma.nombre;

        var imagenArma = document.createElement('img');
        imagenArma.src = arma.imagen;

        var descripcionArma = document.createElement('div');
        descripcionArma.classList.add('descripcion-arma');
        descripcionArma.textContent = arma.descripcion;

        armaElement.appendChild(nombreArma);
        armaElement.appendChild(imagenArma);
        armaElement.appendChild(descripcionArma);

        galeriaArmas.appendChild(armaElement);
    });
}

// Función para cambiar de categoría hacia adelante
document.getElementById('categoria-siguiente').addEventListener('click', function () {
    var indiceCategoria = categorias.indexOf(categoriaActual);
    if (indiceCategoria < categorias.length - 1) {
        categoriaActual = categorias[indiceCategoria + 1];
    } else {
        // Si es la última categoría, cambia a la primera
        categoriaActual = categorias[0];
    }
    document.getElementById('categoria-actual').textContent = categoriaActual;
    actualizarGaleriaArmas();
});

// Función para cambiar de categoría hacia atrás
document.getElementById('categoria-anterior').addEventListener('click', function () {
    var indiceCategoria = categorias.indexOf(categoriaActual);
    if (indiceCategoria > 0) {
        categoriaActual = categorias[indiceCategoria - 1];
    } else {
        // Si es la primera categoría, cambia a la última
        categoriaActual = categorias[categorias.length - 1];
    }
    document.getElementById('categoria-actual').textContent = categoriaActual;
    actualizarGaleriaArmas();
});

// Llama a la función para mostrar las pistolas al cargar la página
actualizarGaleriaArmas();

let mapaActual = 0; // Índice del mapa actual

const mapas = document.querySelectorAll('.map');
const botonAnterior = document.getElementById('anterior-map');
const botonSiguiente = document.getElementById('siguiente-map');

function mostrarMapa(index) {
    mapas.forEach(map => map.style.display = 'none');
    mapas[index].style.display = 'block';
}

function mostrarMapaAnterior() {
    mapaActual = (mapaActual - 1 + mapas.length) % mapas.length;
    mostrarMapa(mapaActual);
}

function mostrarMapaSiguiente() {
    mapaActual = (mapaActual + 1) % mapas.length;
    mostrarMapa(mapaActual);
}

// Mostrar el primer mapa por defecto
mostrarMapa(mapaActual);

let clinetId = "0n3pnpn28t148yej9ez3ikabv7896u";
let clinetSecret = "1avebadh5nkp5ms4y4f6389d9dw0ph";

function getTwitchAuthorization() {
    let url = `https://id.twitch.tv/oauth2/token?client_id=${clinetId}&client_secret=${clinetSecret}&grant_type=client_credentials`;

    return fetch(url, {
        method: "POST",
    })
    .then((res) => res.json())
    .then((data) => {
        return data;
    });
}

async function getGameId(gameName, accessToken) {
    const url = `https://api.twitch.tv/helix/games?name=${gameName}`;
    const headers = {
        "Client-Id": clinetId,
        "Authorization": `Bearer ${accessToken}`
    };

    const response = await fetch(url, {
        headers,
    });

    const data = await response.json();
    
    if (data.data.length > 0) {
        // Si se encontró el juego, devuelve el ID del primer resultado
        return data.data[0].id;
    } else {
        // El juego no se encontró
        return null;
    }
}

async function getStreams(gameId, accessToken) {
    const endpoint = `https://api.twitch.tv/helix/streams?game_id=${gameId}`;
    const headers = {
        "Client-Id": clinetId,
        "Authorization": `Bearer ${accessToken}`
    };

    const response = await fetch(endpoint, {
        headers,
    });

    return response.json();
}

function renderStreams(data) {
    let { data: streams } = data;
    let streamsContainer = document.querySelector("div.streams");

    streamsContainer.innerHTML = ''; // Limpia el contenedor antes de agregar los nuevos streams
    var contador = 0
    streams.forEach((stream) => {
        if (contador < 6) {
            let { thumbnail_url: thumbnail, title, viewer_count } = stream;
            let hdThumbnail = thumbnail
            .replace("{width}", "1280")
            .replace("{height}", "720");
            streamsContainer.innerHTML += `
            <div class="stream-container">
                <img src="${hdThumbnail}" />
                <h2>${title}</h2>
                <p>${viewer_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} watching
                </p>
            </div>
        `;
        contador += 1
        } else {
            null
        }
    });
}

async function getTwitchData() {
    const authData = await getTwitchAuthorization();
    const gameId = await getGameId('Valorant', authData.access_token);
    const streamsData = await getStreams(gameId, authData.access_token);

    renderStreams(streamsData);
}

getTwitchData();