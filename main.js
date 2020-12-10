window.onload = function () {
    let questionBox = document.getElementById("example");
    let answerBox = document.getElementById("answer");
    let timer = false;
    let startTime;
    let endTime;
    let highest;


    // 입력 창 글자 수 제한
    answerBox.maxLength = questionBox.innerHTML.length;

    // 메인 이벤트
    answerBox.addEventListener("keydown", function (event) {
        if (event.code != "Enter" && timer == false) {
            timer = true;
            startTime = new Date().getTime();
        } else if (event.code == "Enter" && timer == true) {
            // 타이머 종료
            endTime = new Date().getTime();
            let ms = endTime - startTime;
            timer = false;

            // 정확도 검사
            let question = questionBox.innerHTML;
            let answer = answerBox.value;
            let errors = 0;
            for (i = 0; i < question.length; i++) {
                if (question[i] != answer[i]) {
                    errors++;
                }
            }

            // 결과 계산
            let cpm = parseInt((answer.length) * (6000 / ms));
            let grossWpm = parseInt((answer.length / 5) * (6000 / ms));
            let netWpm = parseInt(((answer.length / 5) - errors) * (6000 / ms));
            if (netWpm < 0) {
                netWpm = 0;
            }
            if (highest == undefined || netWpm >= highest) {
                highest = netWpm;
            }
            let accuracy = parseInt((1 - (errors / question.length)) * 100);

            // 결과 출력
            document.getElementById("cpm").innerHTML = cpm;
            document.getElementById("grossWpm").innerHTML = grossWpm;
            document.getElementById("netWpm").innerHTML = netWpm;
            document.getElementById("highest").innerHTML = highest;
            document.getElementById("accuracy").innerHTML = accuracy + "%";

            // 새 문제로 넘어감
            let text = getText();
            questionBox.innerHTML = text;
            answerBox.maxLength = text.length;
            answerBox.value = "";
        }
    }, false);


    // 계산 항목별 설명 추가
    let name = document.getElementsByClassName("name")
    name[0].title = "(answer.length) * (6000 / ms)";
    name[1].title = "(answer.length / 5) * (6000 / ms)";
    name[2].title = "((answer.length / 5) - errors) * (6000 / ms)";
    name[3].title = "netWpm";
    name[4].title = "(1 - (errors / answer.length)) * 100";


    // 텍스트 가져오기

    //words는 15글자 이하의 문자를 랜덤 생성한다.
    //접두사 1에서 89까지 중 하나 또는 접미사 91에서 171까지 중 하나에
    //3에서 10까지 랜덤 숫자만큼의 알파벳 소문자를 앞이나 뒤에 추가한다.

    //sentences와 paragraphs는 텍스트를 한 줄씩 읽어서 배열로 만든다.
    //배열의 수 안에서 랜덤 숫자를 고르고
    //그 번호를 배열의 인덱스로 해서 값을 가져와 넘겨준다.
    let words = document.getElementById("words");
    let sentences = document.getElementById("sentences");
    let paragraphs = document.getElementById("paragraphs");

    function getText(file) {
        return "new example";
    }

    words.addEventListener("input", function () {
        console.log("word selected");
    });

    sentences.addEventListener("input", function () {

    });

    paragraphs.addEventListener("input", function () {

    });
}