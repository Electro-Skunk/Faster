window.onload = function () {
    let questionBox = document.getElementById("example");
    let question = questionBox.innerHTML;
    let answerBox = document.getElementById("answer");
    let timer = false;
    let startTime;
    let endTime;
    let highest;

    // 입력 창 글자 수 제한
    answerBox.maxlength = question.length;

    // 입력 창 포커스되면 기본값 글자 지우기
    answerBox.addEventListener("focus", function () {
        answerBox.value = "";
    }, false);

    // 메인 이벤트
    answerBox.addEventListener("keydown", function (event) {

        // 타이머 시작
        if (event.code != "Enter" && timer == false) {
            timer = true;
            startTime = new Date().getTime();
        }

        // 엔터키 눌리면
        if (event.code == "Enter") {
            // 타이머 종료
            endTime = new Date().getTime();
            let ms = endTime - startTime;
            timer = false;

            console.log("startTime =", startTime);
            console.log("endTime =", endTime);
            console.log("ms =", ms);

            // 정확도 검사
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
        }
    }, false);

    // 항목별 설명 추가
    let name = document.getElementsByClassName("name")
    name[0].title = "(answer.length) * (6000 / ms)";
    name[1].title = "(answer.length / 5) * (6000 / ms)";
    name[2].title = "((answer.length / 5) - errors) * (6000 / ms)";
    name[3].title = "netWpm";
    name[4].title = "parseInt((1 - (errors / answer.length)) * 100)";
}