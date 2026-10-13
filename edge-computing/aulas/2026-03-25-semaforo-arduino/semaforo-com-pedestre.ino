const byte BOTAO = 5;
const byte LEDVERMELHO1 = 13;
const byte LEDAMARELO1 = 12;
const byte LEDVERDE1 = 11;
const byte LEDVERMELHO2 = 4;
const byte LEDAMARELO2 = 3;
const byte LEDVERDE2 = 2;
const byte LEDPEDESTREG = 7; // Verde Pedestre
const byte LEDPEDESTREV = 6; // Vermelho Pedestre

void desligarTodos() {
  digitalWrite(LEDVERMELHO1, LOW); 
  digitalWrite(LEDAMARELO1, LOW);
  digitalWrite(LEDVERDE1, LOW);
  digitalWrite(LEDVERMELHO2, LOW);
  digitalWrite(LEDAMARELO2, LOW);
  digitalWrite(LEDVERDE2, LOW);
  digitalWrite(LEDPEDESTREG, LOW);
  digitalWrite(LEDPEDESTREV, LOW); // Corrigido aqui
}

void setup() {
  pinMode(LEDVERMELHO1, OUTPUT);
  pinMode(LEDAMARELO1, OUTPUT);
  pinMode(LEDVERDE1, OUTPUT);
  pinMode(LEDVERMELHO2, OUTPUT);
  pinMode(LEDAMARELO2, OUTPUT);
  pinMode(LEDVERDE2, OUTPUT);
  pinMode(LEDPEDESTREG, OUTPUT);
  pinMode(LEDPEDESTREV, OUTPUT);
  pinMode(BOTAO, INPUT_PULLUP);
}

void loop() {
  // Se o botão for pressionado (nível lógico LOW devido ao PULLUP)
  if (digitalRead(BOTAO) == LOW) {
    
    // 1. Fase de Atenção: Amarelo para os carros antes de parar
    desligarTodos();
    digitalWrite(LEDAMARELO1, HIGH);
    digitalWrite(LEDAMARELO2, HIGH);
    digitalWrite(LEDPEDESTREV, HIGH); // Pedestre ainda espera
    delay(2000);

    // 2. Travessia: Carros em Vermelho, Pedestre em Verde
    desligarTodos();
    digitalWrite(LEDVERMELHO1, HIGH);
    digitalWrite(LEDVERMELHO2, HIGH);
    digitalWrite(LEDPEDESTREG, HIGH); 
    delay(5000); // Tempo para o pedestre atravessar

    // 3. Alerta Pedestre: Verde apaga e Vermelho pisca (indicando fim do tempo)
    digitalWrite(LEDPEDESTREG, LOW);
    for (int i = 0; i < 5; i++) {
      digitalWrite(LEDPEDESTREV, HIGH);
      delay(300);
      digitalWrite(LEDPEDESTREV, LOW);
      delay(300);
    }
    
  } else {
    // Ciclo Normal dos Semáforos (Carros)
    // O pedestre fica sempre em VERMELHO durante o ciclo normal
    
    // Fase 1: S1 Verde, S2 Vermelho
    desligarTodos();
    digitalWrite(LEDVERDE1, HIGH);
    digitalWrite(LEDVERMELHO2, HIGH);
    digitalWrite(LEDPEDESTREV, HIGH); 
    delay(4000);

    // Fase 2: S1 Amarelo, S2 Vermelho
    digitalWrite(LEDVERDE1, LOW);
    digitalWrite(LEDAMARELO1, HIGH);
    delay(1500);

    // Fase 3: S1 Vermelho, S2 Verde
    desligarTodos();
    digitalWrite(LEDVERMELHO1, HIGH);
    digitalWrite(LEDVERDE2, HIGH);
    digitalWrite(LEDPEDESTREV, HIGH);
    delay(4000);

    // Fase 4: S1 Vermelho, S2 Amarelo
    digitalWrite(LEDVERDE2, LOW);
    digitalWrite(LEDAMARELO2, HIGH);
    delay(1500);
  }
}
