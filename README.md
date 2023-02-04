# baekjoon-fanclub
Baekjoon Online Judge [공식 팬클럽](https://www.acmicpc.net/group/14615)

스코어보드를 위한 Archive인데
스코어보드를 만드는 데 오래 걸릴 거 같고
그 사이에 BOJ가 업데이트하면 어쩌지라는 불안에 미리 Archive해두는 제출 현황

다른 데이터들은: [셋 제작자](https://www.acmicpc.net/group/board/view/14615/27869) / [사용된 문제](https://www.acmicpc.net/group/board/view/14615/28049)

## JSON 읽는 방식
- id: 연습셋 번호 (URL 기준)
- index: 연습셋 번호 (열린 순서 기준)
- title: 연습셋의 이름
- creator: 연습셋을 만든 사람
- startTime: 연습셋의 시작 시각
- endTime: 연습셋의 종료 시각
- problems[]: 사용된 문제들
	- id: 문제 번호
	- index: 연습셋에서의 문제 번호
	- title: 문제 이름
- submissions[]: 제출 현황
	- handle: 제출한 유저
	- id: 제출 번호
	- problem: 문제 번호 (problem.index와 동일)
	- verdict: 채점 결과
	- time: 제출 시각
시각은 YYYY.MM.DD. hh:mm:ss 형식으로 표현되며, UTC+9를 기준으로 한다.

- id: 연습셋 URL에 쓰인 ID
- idx: 1부터 차례로 매겨진 연습셋 번호
- name: 연습셋 이름
- creator: 제작자
- start: 시작한 시각
- end: 종료된 시각
- problems[]: 사용된 문제들
	- id: 문제 번호
	- idx: 연습셋 속 문제 번호 (A, B, C, ... or 1, 2, 3, ...)
	- name: 문제 이름
- submissions[]: 제출 현황 (최근 제출이 더 위에 있음에 주의)
	- user: 유저 핸들
	- id: 제출 번호
	- idx: 문제 번호 (problems의 id와 동일) or 문제 제목 (제작자의 부주의로 인한 실수)
	- verdict: 채점 결과
	- time: 제출 시각
모든 시각은 YYYY.MM.DD. hh:mm:ss 형식으로 표현되며, UTC+9를 기준으로 한다.