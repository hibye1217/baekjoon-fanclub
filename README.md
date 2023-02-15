# baekjoon-fanclub
Baekjoon Online Judge [공식 팬클럽](https://www.acmicpc.net/group/14615)

스코어보드를 위한 Archive인데
스코어보드를 만드는 데 오래 걸릴 거 같고
그 사이에 BOJ가 업데이트하면 어쩌지라는 불안에 미리 Archive해두는 제출 현황

다른 데이터들은: [셋 제작자](https://www.acmicpc.net/group/board/view/14615/27869) / [사용된 문제](https://www.acmicpc.net/group/board/view/14615/28049)

## JSON 읽는 방식
- id: 연습셋 번호 (URL 기준)
- order: 연습셋 번호 (열린 순서 기준)
- rated: 다음 연습셋 제작자에 관여하는지 여부
- title: 연습셋의 이름
- creator: 연습셋을 만든 사람
- startTime: 연습셋의 시작 시각
- endTime: 연습셋의 종료 시각
- link: 연습셋 종료 후의 추첨 링크
- incomplete: 종료 후처리가 안 된 연습
- problems[]: 사용된 문제들
	- id: 문제 번호
	- index: 연습셋에서의 문제 번호
	- title: 문제 이름
- submissions[]: 제출 현황
	- handle: 제출한 유저
	- id: 제출 번호
	- problem: 문제 번호 (problems[].index와 동일)
	- verdict: 채점 결과 (BOJ의 "result-" 다음에 오는 부분)
	- time: 제출 시각
모든 시각은 Unix Time을 기준으로 합니다.