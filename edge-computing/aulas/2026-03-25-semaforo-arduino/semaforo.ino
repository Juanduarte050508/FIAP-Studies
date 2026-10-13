const byte BOTAO = 5;
const byte LEDVERMELHO1 = 13;
const byte LEDAMARELO1 = 12;
const byte LEDVERDE1 = 11;
const byte LEDVERMELHO2 = 4;
const byte LEDAMARELO2 = 3;
const byte LEDVERDE2 = 2;

void desligarTodos() {
  digitalWrite(LEDVERMELHO1, LOW);
  digitalWrite(LEDAMARELO1, LOW);
  digitalWrite(LEDVERDE1, LOW);
  digitalWrite(LEDVERMELHO2, LOW);
  digitalWrite(LEDAMARELO2, LOW);
  digitalWrite(LEDVERDE2, LOW);
}

void setup() {
  pinMode(LEDVERMELHO1, OUTPUT);
  pinMode(LEDAMARELO1, OUTPUT);
  pinMode(LEDVERDE1, OUTPUT);
  pinMode(LEDVERMELHO2, OUTPUT);
  pinMode(LEDAMARELO2, OUTPUT);
  pinMode(LEDVERDE2, OUTPUT);
  pinMode(BOTAO, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(BOTAO) == 0) {
    desligarTodos();
    digitalWrite(LEDVERMELHO1, HIGH);
    digitalWrite(LEDVERMELHO2, HIGH);
    digitalWrite(LEDVERDE2, HIGH);
    delay(5000);
    for (int i = 5; i > 0; i--) {
      digitalWrite(LEDVERDE2, HIGH);
      delay(500);
      digitalWrite(LEDVERDE2, LOW);
      delay(500);
    }
    digitalWrite(LEDVERDE2, LOW);
  } else {
    // Fase 1: Semaforo1 verde, Semaforo2 vermelho
    desligarTodos();
    digitalWrite(LEDVERDE1, HIGH);
    digitalWrite(LEDVERMELHO2, HIGH);
    delay(4000);

    // Fase 2: Semaforo1 amarelo, Semaforo2 vermelho
    desligarTodos();
    digitalWrite(LEDAMARELO1, HIGH);
    digitalWrite(LEDVERMELHO2, HIGH);
    delay(1500);

    // Fase 3: Semaforo1 vermelho, Semaforo2 verde
    desligarTodos();
    digitalWrite(LEDVERMELHO1, HIGH);
    digitalWrite(LEDVERDE2, HIGH);
    delay(4000);

    // Fase 4: Semaforo1 vermelho, Semaforo2 amarelo
    desligarTodos();
    digitalWrite(LEDVERMELHO1, HIGH);
    digitalWrite(LEDAMARELO2, HIGH);
    delay(1500);
  }
}
