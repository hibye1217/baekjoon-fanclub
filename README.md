# baekjoon-fanclub
Baekjoon Online Judge [공식 팬클럽](https://www.acmicpc.net/group/14615)의 데이터가 모아진 곳.

나중에 웹을 더욱 더욱 더더욱 배우고 난 뒤에는 훨씬 모던한 사이트를 만들 수 있지 않을까?

### result.json 읽는 방법
- `incomplete`: 현재 진행 중인 셋으로, 아래 정보 중 일부가 누락되어있을 수 있음을 나타냅니다.
- `id`: URL에 적힌 연습셋의 번호를 나타냅니다.
- `order`: 몇 번째 연습인지 나타냅니다.
- `rated`: 다음 추첨자를 결정하는 연습인지 나타냅니다.
- `title`: 연습의 제목을 나타냅니다.
- `creator`: 연습의 제작자를 나타냅니다.
- `startTime`: 연습이 시작한 시각을 Unix Time으로 나타냅니다.
- `endTime`: 연습이 끝난 시각을 Unix Time으로 나타냅니다.
- `problems`: 연습셋에 쓰인 문제들을 나타냅니다.
	- `id`: 문제의 BOJ 번호를 나타냅니다.
	- `index`: 연습셋에서의 문제 번호를 나타냅니다.
	- `title`: 문제의 제목을 나타냅니다.
- `submissions`: 연습셋의 제출들을 나타냅니다.
	- `handle`: 제출한 사람의 핸들을 나타냅니다.
	- `id`: 제출 번호를 나타냅니다.
	- `problem`: 대응되는 문제의 `index`를 나타냅니다.
	- `verdict`: 제출의 채점 결과를 나타냅니다.
	- `time`: 제출이 이루어진 시각을 Unix Time으로 나타냅니다.