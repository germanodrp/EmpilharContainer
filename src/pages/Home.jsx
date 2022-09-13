import "./styles.scss";

export function Home() {
  var pilhaDeContainer = [];
  var pilhaDeContainer2 = [];
  var pilhaDeContainer3 = [];
  var pilhaDeContainer4 = [];

  var id = 0;

  function AdicinarNoContainer() {
    if (pilhaDeContainer.length < 3) {
      id++;
      var numero = Math.floor(Math.random() * 50 + 1);

      pilhaDeContainer.push({ id, numero });
    } else {
      alert("Impossivel empilhar!");
    }
  }

  function AdicinarNoContainer2() {
    if (pilhaDeContainer2.length < 3) {
      id++;
      var numero = Math.floor(Math.random() * 50 + 1);

      pilhaDeContainer2.push({ id, numero });
    } else {
      alert("Impossivel empilhar !");
    }
  }

  function AdicinarNoContainer3() {
    if (pilhaDeContainer3.length < 3) {
      id++;
      var numero = Math.floor(Math.random() * 50 + 1);

      pilhaDeContainer3.push({ id, numero });
    } else {
      alert("Impossivel empilhar !");
    }
  }

  function AdicinarNoContainer4() {
    if (pilhaDeContainer4.length < 3) {
      id++;
      var numero = Math.floor(Math.random() * 50 + 1);

      pilhaDeContainer4.push({ id, numero });
    } else {
      alert("Impossivel empilhar !");
    }
  }

  function listarPilha() {
    console.log(
      "A pilha 1 esta assim:",
      pilhaDeContainer,
      "\n A pilha 2 esta assim:",
      pilhaDeContainer2,
      "\n A pilha 3 esta assim:",
      pilhaDeContainer3,
      "\n A pilha 4 esta assim:",
      pilhaDeContainer4
    );
  }

  function AdicionarContainerNaPilha() {
    let tamanhoArray1 = pilhaDeContainer.length;
    let tamanhoArray2 = pilhaDeContainer2.length;
    let tamanhoArray3 = pilhaDeContainer3.length;
    let tamanhoArray4 = pilhaDeContainer4.length;

    var menor = Math.min(
      tamanhoArray1,
      tamanhoArray2,
      tamanhoArray3,
      tamanhoArray4
    );

    if (menor === tamanhoArray1) {
      AdicinarNoContainer();
    } else if (menor === tamanhoArray2) {
      AdicinarNoContainer2();
    } else if (menor === tamanhoArray3) {
      AdicinarNoContainer3();
    } else if (menor === tamanhoArray4) {
      AdicinarNoContainer4();
    }
  }

  // function removerContainerPorId() {

  //   // if (pilhaDeContainer.indexOf(valorId) != -1) {
  //   //   pilhaDeContainer.splice(pilhaDeContainer.indexOf(valorId), 1);
  //   // } else if (pilhaDeContainer2.indexOf(valorId) != -1) {
  //   //   pilhaDeContainer2.splice(pilhaDeContainer2.indexOf(valorId), 1);
  //   // } else if (pilhaDeContainer3.indexOf(valorId) != -1) {
  //   //   pilhaDeContainer3.splice(pilhaDeContainer3.indexOf(valorId), 1);
  //   // } else if (pilhaDeContainer4.indexOf(valorId) != -1) {
  //   //   pilhaDeContainer4.splice(pilhaDeContainer4.indexOf(valorId), 1);
  //   // }
  // }

  return (
    <div className="container">
      {/* <button ype="button" className="button" onClick={removerContainerPorId}>
        Remover
      </button> */}

      <button type="button" className="button" onClick={listarPilha}>
        Listar pilha
      </button>

      <button
        type="button"
        className="button"
        onClick={AdicionarContainerNaPilha}
      >
        Adicionar Container
      </button>
    </div>
  );
}
