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
      alert("Impossivel empilhar nesta Pilha de container !");
    }
  }

  function AdicinarNoContainer2() {
    if (pilhaDeContainer2.length < 3) {
      id++;
      var numero = Math.floor(Math.random() * 50 + 1);

      pilhaDeContainer2.push({ id, numero });
    } else {
      alert("Impossivel empilhar nesta Pilha de container !");
    }
  }

  function AdicinarNoContainer3() {
    if (pilhaDeContainer3.length < 3) {
      id++;
      var numero = Math.floor(Math.random() * 50 + 1);

      pilhaDeContainer3.push({ id, numero });
    } else {
      alert("Impossivel empilhar nesta Pilha de container !");
    }
  }

  function AdicinarNoContainer4() {
    if (pilhaDeContainer4.length < 3) {
      id++;
      var numero = Math.floor(Math.random() * 50 + 1);

      pilhaDeContainer4.push({ id, numero });
    } else {
      alert("Impossivel empilhar nesta Pilha de container !");
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

  function VerificaTamanhoDePilha() {
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
      return alert("A pilha 1 e a menor");
    }
    if (menor === tamanhoArray2) {
      return alert("a pilha 2 e a menor ");
    }
    if (menor === tamanhoArray3) {
      return alert("a pilha 3 e a menor");
    }
    if (menor === tamanhoArray4) {
      return alert("a pilha 4 e a menor");
    }
  }

  return (
    <div className="container">
      <button type="button" className="button" onClick={listarPilha}>
        Listar pilha
      </button>

      <button type="button" className="button" onClick={AdicinarNoContainer}>
        Adicionar na pilha 1
      </button>

      <button type="button" className="button" onClick={AdicinarNoContainer2}>
        Adicionar na pilha 2
      </button>

      <button type="button" className="button" onClick={AdicinarNoContainer3}>
        Adicionar na pilha 3
      </button>

      <button type="button" className="button" onClick={AdicinarNoContainer4}>
        Adicionar na pilha 4
      </button>

      <button type="button" className="button" onClick={VerificaTamanhoDePilha}>
        Analisa Pilha Menor
      </button>
    </div>
  );
}
