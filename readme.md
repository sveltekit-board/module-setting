# setting
sveltekit-board에서 사용할 설정파일들을 다루는 모듈입니다.

설정파일들은 setting 폴더 안에 정해진 이름에 따라 저장됩니다.

## 규칙
설정파일의 이름은 겹치면 안됩니다.

설정파일은 JSON 형식이어야합니다.

설정값은 모두 문자열이어야합니다. 수나 boolean 등은 안됩니다.

설정값은 중첩되지 않아야 합니다.

## API

### get()
```ts
get(name:string, detail:string)
```

해당 name의 설정에서 detail의 key값을 가진 설정값을 가져옵니다.

undefined일 수 있습니다.

### getAll()
```ts
getAll(name:string)
```
해당 name의 모든 설정값을 가져옵니다

### set()
```ts
set(name:string, detail:string, value:string)
```
해당 name의 설정에서 detail의 key값을 가진 설정값을 value로 바꾸고 JSON 파일을 새로 저장합니다.

해당 name의 설정이 없으면 false를 반환하고, 그렇지 않으면 true를 반환합니다.

## 설정파일 이름
