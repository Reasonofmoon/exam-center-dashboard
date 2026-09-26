// 자동 생성된 데모 데이터 (원본: exam-center-system.vercel.app [연습] 2학기 중간고사 기준)
// 원본 화면에서 추출한 정적 데이터입니다. 실제 API 연동 없이 화면 구조를 재현합니다.

export const exams: { id: string; name: string }[] = [
  {
    "id": "a2b93b16-54f7-452f-b765-99af4785003f",
    "name": "[연습] 2학기 중간고사"
  },
  {
    "id": "7c34c801-fee7-45f3-b469-1ca67bcf79ba",
    "name": "[연습] 1학기 기말고사"
  }
];
export const DEFAULT_EXAM_ID = exams[0].id;

export interface Province { id: string; name: string; managerName: string | null; managerPhone: string | null; }
export const provinces: Province[] = [
  {
    "id": "928066c8-bc5c-4ddf-97b2-44217248c17a",
    "name": "강원특별자치도교육청",
    "managerName": null,
    "managerPhone": null
  },
  {
    "id": "2f544427-d572-4e8a-8678-0121b8c34244",
    "name": "경기도교육청",
    "managerName": null,
    "managerPhone": null
  },
  {
    "id": "cdf595d3-3447-4498-a537-5cb457a60669",
    "name": "경상남도교육청",
    "managerName": null,
    "managerPhone": null
  },
  {
    "id": "6ff98475-a111-43de-b63f-d317bc188674",
    "name": "경상북도교육청",
    "managerName": null,
    "managerPhone": null
  },
  {
    "id": "e0ebc7fd-80a3-4eae-bbb7-a16bb6fd8d42",
    "name": "대구광역시교육청",
    "managerName": null,
    "managerPhone": null
  },
  {
    "id": "f2d2be52-fb49-4a06-aab5-b62dcb463729",
    "name": "대전광역시교육청",
    "managerName": null,
    "managerPhone": null
  },
  {
    "id": "c84fb102-7806-4e51-abce-eab026c150b4",
    "name": "부산광역시교육청",
    "managerName": "[연습]부산 도교육청 담당",
    "managerPhone": "010-7000-0002"
  },
  {
    "id": "63f127bc-bef0-4c5b-a98f-53752bbd5d52",
    "name": "서울특별시교육청",
    "managerName": "[연습]서울 도교육청 담당",
    "managerPhone": "010-7000-0001"
  },
  {
    "id": "49ce5fac-3af9-4ad9-929e-fa0e15bab50f",
    "name": "세종특별자치시교육청",
    "managerName": null,
    "managerPhone": null
  },
  {
    "id": "03c9769d-3268-4ed3-b34a-7d9e09b3f2c7",
    "name": "울산광역시교육청",
    "managerName": null,
    "managerPhone": null
  },
  {
    "id": "9719a862-42f4-4c2a-b7f5-ef12cff81595",
    "name": "인천광역시교육청",
    "managerName": null,
    "managerPhone": null
  },
  {
    "id": "884489b4-b3d2-408f-a0e9-31bf328d41b4",
    "name": "전남광주통합특별시교육청",
    "managerName": null,
    "managerPhone": null
  },
  {
    "id": "8808afe0-b53a-4c5f-bc6f-dbf676e57dd3",
    "name": "전북특별자치도교육청",
    "managerName": null,
    "managerPhone": null
  },
  {
    "id": "71ce40ac-d46a-4393-ac96-f5794cf2e747",
    "name": "제주특별자치도교육청",
    "managerName": null,
    "managerPhone": null
  },
  {
    "id": "87936317-4f8e-4fe4-afcf-4a28a7bfd161",
    "name": "충청남도교육청",
    "managerName": null,
    "managerPhone": null
  },
  {
    "id": "33569f59-ab06-4574-bb70-76c79019ee46",
    "name": "충청북도교육청",
    "managerName": null,
    "managerPhone": null
  }
];

export interface DistrictAssignment { name: string; province: string; }
export const districts: DistrictAssignment[] = [
  {
    "name": "[연습] 강원설악교육지원청",
    "province": "강원특별자치도교육청"
  },
  {
    "name": "[연습] 강원원주교육지원청",
    "province": "강원특별자치도교육청"
  },
  {
    "name": "[연습] 강원춘천교육지원청",
    "province": "강원특별자치도교육청"
  },
  {
    "name": "[연습] 경기성남교육지원청",
    "province": "경기도교육청"
  },
  {
    "name": "[연습] 경기수원교육지원청",
    "province": "경기도교육청"
  },
  {
    "name": "[연습] 경남진주교육지원청",
    "province": "경상남도교육청"
  },
  {
    "name": "[연습] 경남창원교육지원청",
    "province": "경상남도교육청"
  },
  {
    "name": "[연습] 경북구미교육지원청",
    "province": "경상북도교육청"
  },
  {
    "name": "[연습] 경북안동교육지원청",
    "province": "경상북도교육청"
  },
  {
    "name": "[연습] 경북포항교육지원청",
    "province": "경상북도교육청"
  },
  {
    "name": "[연습] 남원교육지원청",
    "province": "전북특별자치도교육청"
  },
  {
    "name": "[연습] 대구달서교육지원청",
    "province": "대구광역시교육청"
  },
  {
    "name": "[연습] 대구달성교육지원청",
    "province": "대구광역시교육청"
  },
  {
    "name": "[연습] 대구수성교육지원청",
    "province": "대구광역시교육청"
  },
  {
    "name": "[연습] 대전서구교육지원청",
    "province": "대전광역시교육청"
  },
  {
    "name": "[연습] 대전유성교육지원청",
    "province": "대전광역시교육청"
  },
  {
    "name": "[연습] 대전중구교육지원청",
    "province": "대전광역시교육청"
  },
  {
    "name": "[연습] 부산바다교육지원청",
    "province": "부산광역시교육청"
  },
  {
    "name": "[연습] 부산해운대교육지원청",
    "province": "부산광역시교육청"
  },
  {
    "name": "[연습] 서울강동교육지원청",
    "province": "서울특별시교육청"
  },
  {
    "name": "[연습] 서울강서교육지원청",
    "province": "서울특별시교육청"
  },
  {
    "name": "[연습] 서울한강교육지원청",
    "province": "서울특별시교육청"
  },
  {
    "name": "[연습] 세종나성교육지원청",
    "province": "세종특별자치시교육청"
  },
  {
    "name": "[연습] 세종어진교육지원청",
    "province": "세종특별자치시교육청"
  },
  {
    "name": "[연습] 세종호수교육지원청",
    "province": "세종특별자치시교육청"
  },
  {
    "name": "[연습] 울산남구교육지원청",
    "province": "울산광역시교육청"
  },
  {
    "name": "[연습] 울산태화교육지원청",
    "province": "울산광역시교육청"
  },
  {
    "name": "[연습] 인천부평교육지원청",
    "province": "인천광역시교육청"
  },
  {
    "name": "[연습] 인천송도교육지원청",
    "province": "인천광역시교육청"
  },
  {
    "name": "[연습] 전남순천교육지원청",
    "province": "전남광주통합특별시교육청"
  },
  {
    "name": "[연습] 전남여수교육지원청",
    "province": "전남광주통합특별시교육청"
  },
  {
    "name": "[연습] 전주교육지원청",
    "province": "전북특별자치도교육청"
  },
  {
    "name": "[연습] 정읍교육지원청",
    "province": "전북특별자치도교육청"
  },
  {
    "name": "[연습] 제주서귀포교육지원청",
    "province": "제주특별자치도교육청"
  },
  {
    "name": "[연습] 제주애월교육지원청",
    "province": "제주특별자치도교육청"
  },
  {
    "name": "[연습] 제주한라교육지원청",
    "province": "제주특별자치도교육청"
  },
  {
    "name": "[연습] 충남서산교육지원청",
    "province": "충청남도교육청"
  },
  {
    "name": "[연습] 충남아산교육지원청",
    "province": "충청남도교육청"
  },
  {
    "name": "[연습] 충남천안교육지원청",
    "province": "충청남도교육청"
  },
  {
    "name": "[연습] 충북청주교육지원청",
    "province": "충청북도교육청"
  },
  {
    "name": "[연습] 충북충주교육지원청",
    "province": "충청북도교육청"
  }
];

export interface CardStats { schools: number; expected: number; attended: number; absent: number; accidents: number; red: number; yellow: number; green: number; }
export interface ProvinceCard { provinceId: string; name: string; stats: CardStats; }
export const provinceCards: ProvinceCard[] = [
  {
    "provinceId": "928066c8-bc5c-4ddf-97b2-44217248c17a",
    "name": "강원특별자치도교육청",
    "stats": {
      "schools": 7,
      "expected": 420,
      "attended": 108,
      "absent": 8,
      "accidents": 2,
      "red": 2,
      "yellow": 2,
      "green": 3
    }
  },
  {
    "provinceId": "2f544427-d572-4e8a-8678-0121b8c34244",
    "name": "경기도교육청",
    "stats": {
      "schools": 5,
      "expected": 288,
      "attended": 0,
      "absent": 0,
      "accidents": 1,
      "red": 3,
      "yellow": 2,
      "green": 0
    }
  },
  {
    "provinceId": "cdf595d3-3447-4498-a537-5cb457a60669",
    "name": "경상남도교육청",
    "stats": {
      "schools": 5,
      "expected": 288,
      "attended": 0,
      "absent": 0,
      "accidents": 2,
      "red": 3,
      "yellow": 2,
      "green": 0
    }
  },
  {
    "provinceId": "6ff98475-a111-43de-b63f-d317bc188674",
    "name": "경상북도교육청",
    "stats": {
      "schools": 7,
      "expected": 420,
      "attended": 0,
      "absent": 0,
      "accidents": 2,
      "red": 4,
      "yellow": 2,
      "green": 1
    }
  },
  {
    "provinceId": "e0ebc7fd-80a3-4eae-bbb7-a16bb6fd8d42",
    "name": "대구광역시교육청",
    "stats": {
      "schools": 7,
      "expected": 420,
      "attended": 0,
      "absent": 0,
      "accidents": 2,
      "red": 4,
      "yellow": 3,
      "green": 0
    }
  },
  {
    "provinceId": "f2d2be52-fb49-4a06-aab5-b62dcb463729",
    "name": "대전광역시교육청",
    "stats": {
      "schools": 7,
      "expected": 420,
      "attended": 54,
      "absent": 4,
      "accidents": 2,
      "red": 2,
      "yellow": 0,
      "green": 5
    }
  },
  {
    "provinceId": "c84fb102-7806-4e51-abce-eab026c150b4",
    "name": "부산광역시교육청",
    "stats": {
      "schools": 5,
      "expected": 288,
      "attended": 0,
      "absent": 0,
      "accidents": 0,
      "red": 3,
      "yellow": 0,
      "green": 2
    }
  },
  {
    "provinceId": "63f127bc-bef0-4c5b-a98f-53752bbd5d52",
    "name": "서울특별시교육청",
    "stats": {
      "schools": 7,
      "expected": 420,
      "attended": 82,
      "absent": 6,
      "accidents": 0,
      "red": 2,
      "yellow": 0,
      "green": 5
    }
  },
  {
    "provinceId": "49ce5fac-3af9-4ad9-929e-fa0e15bab50f",
    "name": "세종특별자치시교육청",
    "stats": {
      "schools": 7,
      "expected": 420,
      "attended": 0,
      "absent": 0,
      "accidents": 0,
      "red": 2,
      "yellow": 3,
      "green": 2
    }
  },
  {
    "provinceId": "03c9769d-3268-4ed3-b34a-7d9e09b3f2c7",
    "name": "울산광역시교육청",
    "stats": {
      "schools": 5,
      "expected": 244,
      "attended": 54,
      "absent": 4,
      "accidents": 0,
      "red": 1,
      "yellow": 0,
      "green": 4
    }
  },
  {
    "provinceId": "9719a862-42f4-4c2a-b7f5-ef12cff81595",
    "name": "인천광역시교육청",
    "stats": {
      "schools": 5,
      "expected": 332,
      "attended": 0,
      "absent": 0,
      "accidents": 3,
      "red": 3,
      "yellow": 2,
      "green": 0
    }
  },
  {
    "provinceId": "884489b4-b3d2-408f-a0e9-31bf328d41b4",
    "name": "전남광주통합특별시교육청",
    "stats": {
      "schools": 5,
      "expected": 244,
      "attended": 0,
      "absent": 0,
      "accidents": 1,
      "red": 3,
      "yellow": 0,
      "green": 2
    }
  },
  {
    "provinceId": "8808afe0-b53a-4c5f-bc6f-dbf676e57dd3",
    "name": "전북특별자치도교육청",
    "stats": {
      "schools": 12,
      "expected": 1032,
      "attended": 352,
      "absent": 18,
      "accidents": 4,
      "red": 10,
      "yellow": 1,
      "green": 1
    }
  },
  {
    "provinceId": "71ce40ac-d46a-4393-ac96-f5794cf2e747",
    "name": "제주특별자치도교육청",
    "stats": {
      "schools": 7,
      "expected": 420,
      "attended": 82,
      "absent": 6,
      "accidents": 2,
      "red": 2,
      "yellow": 1,
      "green": 4
    }
  },
  {
    "provinceId": "87936317-4f8e-4fe4-afcf-4a28a7bfd161",
    "name": "충청남도교육청",
    "stats": {
      "schools": 7,
      "expected": 420,
      "attended": 108,
      "absent": 8,
      "accidents": 0,
      "red": 2,
      "yellow": 1,
      "green": 4
    }
  },
  {
    "provinceId": "33569f59-ab06-4574-bb70-76c79019ee46",
    "name": "충청북도교육청",
    "stats": {
      "schools": 5,
      "expected": 332,
      "attended": 108,
      "absent": 8,
      "accidents": 2,
      "red": 3,
      "yellow": 0,
      "green": 2
    }
  }
];

export const nationalSummary = {
  "provinces": 16,
  "venues": 103,
  "expected": 6408,
  "rate": "15%",
  "accidents": 23,
  "green": 35,
  "yellow": 19,
  "red": 49
} as const;

export interface ReasonItem { level: 'red' | 'amber'; text: string; }
export interface SchoolRow {
  statusTitle: string; emoji: string; school: string; students: string; roomsSeats: string; seats: string;
  supervisors: string; checklist: string; items: string; arrivals: string; attendance: string; accidents: string;
  reasons: ReasonItem[]; normal: string | null;
}
export interface DistrictBlock { name: string; stats: string; rows: SchoolRow[]; }
export interface ProvinceDetail {
  provinceId: string; name: string; statusText: string; schools: string; expected: string;
  attendance: string; accidents: string;
  emojiCounts: { green: number; yellow: number; red: number };
  managerFilled: boolean; districts: DistrictBlock[];
}
export const provinceDetails: ProvinceDetail[] = [
  {
    "provinceId": "928066c8-bc5c-4ddf-97b2-44217248c17a",
    "name": "강원특별자치도교육청",
    "statusText": "🔴 문제",
    "schools": "7",
    "expected": "420",
    "attendance": "108 / 8",
    "accidents": "2",
    "emojiCounts": {
      "green": 3,
      "yellow": 2,
      "red": 2
    },
    "managerFilled": false,
    "districts": [
      {
        "name": "[연습] 강원설악교육지원청",
        "stats": "학교 2곳 · 응시 예정 68명 · 🔴 0 · 🟡 1 · 🟢 1",
        "rows": [
          {
            "statusTitle": "확인 필요",
            "emoji": "🟡",
            "school": "[연습] 강원설악중앙고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "44 / 44",
            "supervisors": "6",
            "checklist": "100%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 강원설악고등학교",
            "students": "24",
            "roomsSeats": "2 / 24",
            "seats": "24 / 24",
            "supervisors": "4",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      },
      {
        "name": "[연습] 강원원주교육지원청",
        "stats": "학교 2곳 · 응시 예정 154명 · 🔴 1 · 🟡 0 · 🟢 1",
        "rows": [
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 강원원주고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "0 / 66",
            "supervisors": "8",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 66명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 강원원주중앙고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "88 / 88",
            "supervisors": "10",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 4",
            "attendance": "54 / 4",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      },
      {
        "name": "[연습] 강원춘천교육지원청",
        "stats": "학교 3곳 · 응시 예정 198명 · 🔴 1 · 🟡 1 · 🟢 1",
        "rows": [
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 강원춘천중앙고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "0 / 66",
            "supervisors": "8",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 66명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "확인 필요",
            "emoji": "🟡",
            "school": "[연습] 강원춘천고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "44 / 44",
            "supervisors": "6",
            "checklist": "100%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 강원춘천서부고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "88 / 88",
            "supervisors": "10",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 4",
            "attendance": "54 / 4",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      }
    ]
  },
  {
    "provinceId": "2f544427-d572-4e8a-8678-0121b8c34244",
    "name": "경기도교육청",
    "statusText": "🔴 문제",
    "schools": "5",
    "expected": "288",
    "attendance": "0 / 0",
    "accidents": "1",
    "emojiCounts": {
      "green": 0,
      "yellow": 2,
      "red": 3
    },
    "managerFilled": false,
    "districts": [
      {
        "name": "[연습] 경기성남교육지원청",
        "stats": "학교 2곳 · 응시 예정 132명 · 🔴 1 · 🟡 1 · 🟢 0",
        "rows": [
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 경기성남고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "0 / 88",
            "supervisors": "10",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 88명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "확인 필요",
            "emoji": "🟡",
            "school": "[연습] 경기성남중앙고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "44 / 44",
            "supervisors": "6",
            "checklist": "100%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          }
        ]
      },
      {
        "name": "[연습] 경기수원교육지원청",
        "stats": "학교 3곳 · 응시 예정 156명 · 🔴 2 · 🟡 1 · 🟢 0",
        "rows": [
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 경기수원고등학교",
            "students": "24",
            "roomsSeats": "2 / 24",
            "seats": "0 / 24",
            "supervisors": "4",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 24명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 경기수원중앙고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "0 / 88",
            "supervisors": "10",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 88명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "확인 필요",
            "emoji": "🟡",
            "school": "[연습] 경기수원서부고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "44 / 44",
            "supervisors": "6",
            "checklist": "100%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          }
        ]
      }
    ]
  },
  {
    "provinceId": "cdf595d3-3447-4498-a537-5cb457a60669",
    "name": "경상남도교육청",
    "statusText": "🔴 문제",
    "schools": "5",
    "expected": "288",
    "attendance": "0 / 0",
    "accidents": "2",
    "emojiCounts": {
      "green": 0,
      "yellow": 2,
      "red": 3
    },
    "managerFilled": false,
    "districts": [
      {
        "name": "[연습] 경남진주교육지원청",
        "stats": "학교 2곳 · 응시 예정 132명 · 🔴 1 · 🟡 1 · 🟢 0",
        "rows": [
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 경남진주중앙고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "0 / 44",
            "supervisors": "6",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 44명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "확인 필요",
            "emoji": "🟡",
            "school": "[연습] 경남진주고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "88 / 88",
            "supervisors": "10",
            "checklist": "100%",
            "items": "0 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          }
        ]
      },
      {
        "name": "[연습] 경남창원교육지원청",
        "stats": "학교 3곳 · 응시 예정 156명 · 🔴 2 · 🟡 1 · 🟢 0",
        "rows": [
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 경남창원서부고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "0 / 44",
            "supervisors": "6",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 44명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 경남창원고등학교",
            "students": "24",
            "roomsSeats": "2 / 24",
            "seats": "0 / 24",
            "supervisors": "4",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 24명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "확인 필요",
            "emoji": "🟡",
            "school": "[연습] 경남창원중앙고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "88 / 88",
            "supervisors": "10",
            "checklist": "100%",
            "items": "0 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          }
        ]
      }
    ]
  },
  {
    "provinceId": "6ff98475-a111-43de-b63f-d317bc188674",
    "name": "경상북도교육청",
    "statusText": "🔴 문제",
    "schools": "7",
    "expected": "420",
    "attendance": "0 / 0",
    "accidents": "2",
    "emojiCounts": {
      "green": 1,
      "yellow": 2,
      "red": 4
    },
    "managerFilled": false,
    "districts": [
      {
        "name": "[연습] 경북구미교육지원청",
        "stats": "학교 2곳 · 응시 예정 132명 · 🔴 1 · 🟡 1 · 🟢 0",
        "rows": [
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 경북구미중앙고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "0 / 44",
            "supervisors": "6",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 44명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "확인 필요",
            "emoji": "🟡",
            "school": "[연습] 경북구미고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "88 / 88",
            "supervisors": "10",
            "checklist": "100%",
            "items": "0 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          }
        ]
      },
      {
        "name": "[연습] 경북안동교육지원청",
        "stats": "학교 2곳 · 응시 예정 90명 · 🔴 1 · 🟡 0 · 🟢 1",
        "rows": [
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 경북안동중앙고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "0 / 66",
            "supervisors": "8",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 66명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 경북안동고등학교",
            "students": "24",
            "roomsSeats": "2 / 24",
            "seats": "24 / 24",
            "supervisors": "4",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      },
      {
        "name": "[연습] 경북포항교육지원청",
        "stats": "학교 3곳 · 응시 예정 198명 · 🔴 2 · 🟡 1 · 🟢 0",
        "rows": [
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 경북포항서부고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "0 / 44",
            "supervisors": "6",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 44명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 경북포항고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "0 / 66",
            "supervisors": "8",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 66명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "확인 필요",
            "emoji": "🟡",
            "school": "[연습] 경북포항중앙고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "88 / 88",
            "supervisors": "10",
            "checklist": "100%",
            "items": "0 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          }
        ]
      }
    ]
  },
  {
    "provinceId": "e0ebc7fd-80a3-4eae-bbb7-a16bb6fd8d42",
    "name": "대구광역시교육청",
    "statusText": "🔴 문제",
    "schools": "7",
    "expected": "420",
    "attendance": "0 / 0",
    "accidents": "2",
    "emojiCounts": {
      "green": 0,
      "yellow": 3,
      "red": 4
    },
    "managerFilled": false,
    "districts": [
      {
        "name": "[연습] 대구달서교육지원청",
        "stats": "학교 2곳 · 응시 예정 154명 · 🔴 1 · 🟡 1 · 🟢 0",
        "rows": [
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 대구달서중앙고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "0 / 88",
            "supervisors": "10",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 88명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "확인 필요",
            "emoji": "🟡",
            "school": "[연습] 대구달서고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "66 / 66",
            "supervisors": "8",
            "checklist": "100%",
            "items": "0 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          }
        ]
      },
      {
        "name": "[연습] 대구달성교육지원청",
        "stats": "학교 2곳 · 응시 예정 68명 · 🔴 1 · 🟡 1 · 🟢 0",
        "rows": [
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 대구달성중앙고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "0 / 44",
            "supervisors": "6",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 44명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "확인 필요",
            "emoji": "🟡",
            "school": "[연습] 대구달성고등학교",
            "students": "24",
            "roomsSeats": "2 / 24",
            "seats": "24 / 24",
            "supervisors": "4",
            "checklist": "100%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          }
        ]
      },
      {
        "name": "[연습] 대구수성교육지원청",
        "stats": "학교 3곳 · 응시 예정 198명 · 🔴 2 · 🟡 1 · 🟢 0",
        "rows": [
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 대구수성서부고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "0 / 88",
            "supervisors": "10",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 88명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 대구수성고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "0 / 44",
            "supervisors": "6",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 44명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "확인 필요",
            "emoji": "🟡",
            "school": "[연습] 대구수성중앙고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "66 / 66",
            "supervisors": "8",
            "checklist": "100%",
            "items": "0 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          }
        ]
      }
    ]
  },
  {
    "provinceId": "f2d2be52-fb49-4a06-aab5-b62dcb463729",
    "name": "대전광역시교육청",
    "statusText": "🔴 문제",
    "schools": "7",
    "expected": "420",
    "attendance": "54 / 4",
    "accidents": "2",
    "emojiCounts": {
      "green": 5,
      "yellow": 0,
      "red": 2
    },
    "managerFilled": false,
    "districts": [
      {
        "name": "[연습] 대전서구교육지원청",
        "stats": "학교 3곳 · 응시 예정 198명 · 🔴 1 · 🟡 0 · 🟢 2",
        "rows": [
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 대전서구고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "0 / 88",
            "supervisors": "10",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 88명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 대전서구서부고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "66 / 66",
            "supervisors": "8",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 대전서구중앙고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "44 / 44",
            "supervisors": "6",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 2",
            "attendance": "27 / 2",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      },
      {
        "name": "[연습] 대전유성교육지원청",
        "stats": "학교 2곳 · 응시 예정 112명 · 🔴 1 · 🟡 0 · 🟢 1",
        "rows": [
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 대전유성중앙고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "0 / 88",
            "supervisors": "10",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 88명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 대전유성고등학교",
            "students": "24",
            "roomsSeats": "2 / 24",
            "seats": "24 / 24",
            "supervisors": "4",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      },
      {
        "name": "[연습] 대전중구교육지원청",
        "stats": "학교 2곳 · 응시 예정 110명 · 🔴 0 · 🟡 0 · 🟢 2",
        "rows": [
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 대전중구고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "44 / 44",
            "supervisors": "6",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 2",
            "attendance": "27 / 2",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 대전중구중앙고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "66 / 66",
            "supervisors": "8",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      }
    ]
  },
  {
    "provinceId": "c84fb102-7806-4e51-abce-eab026c150b4",
    "name": "부산광역시교육청",
    "statusText": "🔴 문제",
    "schools": "5",
    "expected": "288",
    "attendance": "0 / 0",
    "accidents": "0",
    "emojiCounts": {
      "green": 2,
      "yellow": 0,
      "red": 3
    },
    "managerFilled": true,
    "districts": [
      {
        "name": "[연습] 부산바다교육지원청",
        "stats": "학교 3곳 · 응시 예정 156명 · 🔴 2 · 🟡 0 · 🟢 1",
        "rows": [
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 부산바다고등학교",
            "students": "24",
            "roomsSeats": "2 / 24",
            "seats": "0 / 24",
            "supervisors": "4",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 24명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 부산바다서부고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "0 / 44",
            "supervisors": "6",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 44명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 부산바다중앙고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "88 / 88",
            "supervisors": "10",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      },
      {
        "name": "[연습] 부산해운대교육지원청",
        "stats": "학교 2곳 · 응시 예정 132명 · 🔴 1 · 🟡 0 · 🟢 1",
        "rows": [
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 부산해운대중앙고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "0 / 44",
            "supervisors": "6",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 44명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 부산해운대고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "88 / 88",
            "supervisors": "10",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      }
    ]
  },
  {
    "provinceId": "63f127bc-bef0-4c5b-a98f-53752bbd5d52",
    "name": "서울특별시교육청",
    "statusText": "🔴 문제",
    "schools": "7",
    "expected": "420",
    "attendance": "82 / 6",
    "accidents": "0",
    "emojiCounts": {
      "green": 5,
      "yellow": 0,
      "red": 2
    },
    "managerFilled": true,
    "districts": [
      {
        "name": "[연습] 서울강동교육지원청",
        "stats": "학교 2곳 · 응시 예정 132명 · 🔴 1 · 🟡 0 · 🟢 1",
        "rows": [
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 서울강동중앙고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "0 / 44",
            "supervisors": "6",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 44명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 서울강동고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "88 / 88",
            "supervisors": "10",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      },
      {
        "name": "[연습] 서울강서교육지원청",
        "stats": "학교 3곳 · 응시 예정 198명 · 🔴 1 · 🟡 0 · 🟢 2",
        "rows": [
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 서울강서서부고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "0 / 44",
            "supervisors": "6",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 44명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 서울강서고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "66 / 66",
            "supervisors": "8",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 3",
            "attendance": "41 / 3",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 서울강서중앙고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "88 / 88",
            "supervisors": "10",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      },
      {
        "name": "[연습] 서울한강교육지원청",
        "stats": "학교 2곳 · 응시 예정 90명 · 🔴 0 · 🟡 0 · 🟢 2",
        "rows": [
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 서울한강고등학교",
            "students": "24",
            "roomsSeats": "2 / 24",
            "seats": "24 / 24",
            "supervisors": "4",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 서울한강중앙고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "66 / 66",
            "supervisors": "8",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 3",
            "attendance": "41 / 3",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      }
    ]
  },
  {
    "provinceId": "49ce5fac-3af9-4ad9-929e-fa0e15bab50f",
    "name": "세종특별자치시교육청",
    "statusText": "🔴 문제",
    "schools": "7",
    "expected": "420",
    "attendance": "0 / 0",
    "accidents": "0",
    "emojiCounts": {
      "green": 2,
      "yellow": 3,
      "red": 2
    },
    "managerFilled": false,
    "districts": [
      {
        "name": "[연습] 세종나성교육지원청",
        "stats": "학교 3곳 · 응시 예정 198명 · 🔴 1 · 🟡 1 · 🟢 1",
        "rows": [
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 세종나성중앙고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "0 / 88",
            "supervisors": "10",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 88명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "확인 필요",
            "emoji": "🟡",
            "school": "[연습] 세종나성서부고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "44 / 44",
            "supervisors": "6",
            "checklist": "100%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 세종나성고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "66 / 66",
            "supervisors": "8",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      },
      {
        "name": "[연습] 세종어진교육지원청",
        "stats": "학교 2곳 · 응시 예정 132명 · 🔴 1 · 🟡 1 · 🟢 0",
        "rows": [
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 세종어진고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "0 / 88",
            "supervisors": "10",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 88명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "확인 필요",
            "emoji": "🟡",
            "school": "[연습] 세종어진중앙고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "44 / 44",
            "supervisors": "6",
            "checklist": "100%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          }
        ]
      },
      {
        "name": "[연습] 세종호수교육지원청",
        "stats": "학교 2곳 · 응시 예정 90명 · 🔴 0 · 🟡 1 · 🟢 1",
        "rows": [
          {
            "statusTitle": "확인 필요",
            "emoji": "🟡",
            "school": "[연습] 세종호수고등학교",
            "students": "24",
            "roomsSeats": "2 / 24",
            "seats": "24 / 24",
            "supervisors": "4",
            "checklist": "100%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 세종호수중앙고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "66 / 66",
            "supervisors": "8",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      }
    ]
  },
  {
    "provinceId": "03c9769d-3268-4ed3-b34a-7d9e09b3f2c7",
    "name": "울산광역시교육청",
    "statusText": "🔴 문제",
    "schools": "5",
    "expected": "244",
    "attendance": "54 / 4",
    "accidents": "0",
    "emojiCounts": {
      "green": 4,
      "yellow": 0,
      "red": 1
    },
    "managerFilled": false,
    "districts": [
      {
        "name": "[연습] 울산남구교육지원청",
        "stats": "학교 2곳 · 응시 예정 110명 · 🔴 0 · 🟡 0 · 🟢 2",
        "rows": [
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 울산남구고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "44 / 44",
            "supervisors": "6",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 2",
            "attendance": "27 / 2",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 울산남구중앙고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "66 / 66",
            "supervisors": "8",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      },
      {
        "name": "[연습] 울산태화교육지원청",
        "stats": "학교 3곳 · 응시 예정 134명 · 🔴 1 · 🟡 0 · 🟢 2",
        "rows": [
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 울산태화고등학교",
            "students": "24",
            "roomsSeats": "2 / 24",
            "seats": "0 / 24",
            "supervisors": "4",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 24명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 울산태화서부고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "66 / 66",
            "supervisors": "8",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 울산태화중앙고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "44 / 44",
            "supervisors": "6",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 2",
            "attendance": "27 / 2",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      }
    ]
  },
  {
    "provinceId": "9719a862-42f4-4c2a-b7f5-ef12cff81595",
    "name": "인천광역시교육청",
    "statusText": "🔴 문제",
    "schools": "5",
    "expected": "332",
    "attendance": "0 / 0",
    "accidents": "3",
    "emojiCounts": {
      "green": 0,
      "yellow": 2,
      "red": 3
    },
    "managerFilled": false,
    "districts": [
      {
        "name": "[연습] 인천부평교육지원청",
        "stats": "학교 2곳 · 응시 예정 154명 · 🔴 1 · 🟡 1 · 🟢 0",
        "rows": [
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 인천부평중앙고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "0 / 88",
            "supervisors": "10",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 88명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "확인 필요",
            "emoji": "🟡",
            "school": "[연습] 인천부평고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "66 / 66",
            "supervisors": "8",
            "checklist": "100%",
            "items": "0 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          }
        ]
      },
      {
        "name": "[연습] 인천송도교육지원청",
        "stats": "학교 3곳 · 응시 예정 178명 · 🔴 2 · 🟡 1 · 🟢 0",
        "rows": [
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 인천송도고등학교",
            "students": "24",
            "roomsSeats": "2 / 24",
            "seats": "0 / 24",
            "supervisors": "4",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 24명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 인천송도서부고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "0 / 88",
            "supervisors": "10",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 88명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "확인 필요",
            "emoji": "🟡",
            "school": "[연습] 인천송도중앙고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "66 / 66",
            "supervisors": "8",
            "checklist": "100%",
            "items": "0 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          }
        ]
      }
    ]
  },
  {
    "provinceId": "884489b4-b3d2-408f-a0e9-31bf328d41b4",
    "name": "전남광주통합특별시교육청",
    "statusText": "🔴 문제",
    "schools": "5",
    "expected": "244",
    "attendance": "0 / 0",
    "accidents": "1",
    "emojiCounts": {
      "green": 2,
      "yellow": 0,
      "red": 3
    },
    "managerFilled": false,
    "districts": [
      {
        "name": "[연습] 전남순천교육지원청",
        "stats": "학교 2곳 · 응시 예정 110명 · 🔴 1 · 🟡 0 · 🟢 1",
        "rows": [
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 전남순천중앙고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "0 / 66",
            "supervisors": "8",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 66명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 전남순천고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "44 / 44",
            "supervisors": "6",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      },
      {
        "name": "[연습] 전남여수교육지원청",
        "stats": "학교 3곳 · 응시 예정 134명 · 🔴 2 · 🟡 0 · 🟢 1",
        "rows": [
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 전남여수고등학교",
            "students": "24",
            "roomsSeats": "2 / 24",
            "seats": "0 / 24",
            "supervisors": "4",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 24명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 전남여수서부고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "0 / 66",
            "supervisors": "8",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 66명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 전남여수중앙고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "44 / 44",
            "supervisors": "6",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      }
    ]
  },
  {
    "provinceId": "8808afe0-b53a-4c5f-bc6f-dbf676e57dd3",
    "name": "전북특별자치도교육청",
    "statusText": "🔴 문제",
    "schools": "12",
    "expected": "1032",
    "attendance": "352 / 18",
    "accidents": "4",
    "emojiCounts": {
      "green": 1,
      "yellow": 1,
      "red": 10
    },
    "managerFilled": false,
    "districts": [
      {
        "name": "[연습] 남원교육지원청",
        "stats": "학교 7곳 · 응시 예정 502명 · 🔴 6 · 🟡 1 · 🟢 0",
        "rows": [
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 군산바다고등학교",
            "students": "40",
            "roomsSeats": "2 / 40",
            "seats": "40 / 40",
            "supervisors": "4",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "1 / 2",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 남원지리고등학교",
            "students": "120",
            "roomsSeats": "4 / 120",
            "seats": "120 / 120",
            "supervisors": "5",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "3",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 3건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 김제들녘고등학교",
            "students": "60",
            "roomsSeats": "1 / 30",
            "seats": "30 / 60",
            "supervisors": "4",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 1",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 30명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 남원고등학교",
            "students": "96",
            "roomsSeats": "4 / 120",
            "seats": "96 / 96",
            "supervisors": "8",
            "checklist": "33%",
            "items": "1 / 3",
            "arrivals": "0 / 4",
            "attendance": "72 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 33% (1/3, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 2건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 완주숲속고등학교",
            "students": "60",
            "roomsSeats": "0 / 0",
            "seats": "0 / 60",
            "supervisors": "6",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 0",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 시험실이 등록되지 않음"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 60명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 익산들샘고등학교",
            "students": "90",
            "roomsSeats": "3 / 90",
            "seats": "0 / 90",
            "supervisors": "8",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 90명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "확인 필요",
            "emoji": "🟡",
            "school": "[연습] 임실치즈고등학교",
            "students": "36",
            "roomsSeats": "2 / 36",
            "seats": "36 / 36",
            "supervisors": "6",
            "checklist": "100%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          }
        ]
      },
      {
        "name": "[연습] 전주교육지원청",
        "stats": "학교 2곳 · 응시 예정 310명 · 🔴 1 · 🟡 0 · 🟢 1",
        "rows": [
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 전주새봄고등학교",
            "students": "60",
            "roomsSeats": "3 / 90",
            "seats": "60 / 60",
            "supervisors": "6",
            "checklist": "33%",
            "items": "0 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 33% (1/3, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 전주가람고등학교",
            "students": "250",
            "roomsSeats": "10 / 300",
            "seats": "250 / 250",
            "supervisors": "24",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "10 / 10",
            "attendance": "240 / 10",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      },
      {
        "name": "[연습] 정읍교육지원청",
        "stats": "학교 3곳 · 응시 예정 220명 · 🔴 3 · 🟡 0 · 🟢 0",
        "rows": [
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 부안노을고등학교",
            "students": "100",
            "roomsSeats": "4 / 100",
            "seats": "100 / 100",
            "supervisors": "8",
            "checklist": "0%",
            "items": "1 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 2건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 순창장류고등학교",
            "students": "72",
            "roomsSeats": "3 / 72",
            "seats": "72 / 72",
            "supervisors": "9",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 정읍단풍고등학교",
            "students": "48",
            "roomsSeats": "2 / 48",
            "seats": "48 / 48",
            "supervisors": "6",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "40 / 8",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          }
        ]
      }
    ]
  },
  {
    "provinceId": "71ce40ac-d46a-4393-ac96-f5794cf2e747",
    "name": "제주특별자치도교육청",
    "statusText": "🔴 문제",
    "schools": "7",
    "expected": "420",
    "attendance": "82 / 6",
    "accidents": "2",
    "emojiCounts": {
      "green": 4,
      "yellow": 1,
      "red": 2
    },
    "managerFilled": false,
    "districts": [
      {
        "name": "[연습] 제주서귀포교육지원청",
        "stats": "학교 3곳 · 응시 예정 198명 · 🔴 1 · 🟡 0 · 🟢 2",
        "rows": [
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 제주서귀포고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "0 / 44",
            "supervisors": "6",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 44명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 제주서귀포서부고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "88 / 88",
            "supervisors": "10",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 제주서귀포중앙고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "66 / 66",
            "supervisors": "8",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 3",
            "attendance": "41 / 3",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      },
      {
        "name": "[연습] 제주애월교육지원청",
        "stats": "학교 2곳 · 응시 예정 154명 · 🔴 0 · 🟡 0 · 🟢 2",
        "rows": [
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 제주애월고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "66 / 66",
            "supervisors": "8",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 3",
            "attendance": "41 / 3",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 제주애월중앙고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "88 / 88",
            "supervisors": "10",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 4",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      },
      {
        "name": "[연습] 제주한라교육지원청",
        "stats": "학교 2곳 · 응시 예정 68명 · 🔴 1 · 🟡 1 · 🟢 0",
        "rows": [
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 제주한라중앙고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "0 / 44",
            "supervisors": "6",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 44명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "확인 필요",
            "emoji": "🟡",
            "school": "[연습] 제주한라고등학교",
            "students": "24",
            "roomsSeats": "2 / 24",
            "seats": "24 / 24",
            "supervisors": "4",
            "checklist": "100%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          }
        ]
      }
    ]
  },
  {
    "provinceId": "87936317-4f8e-4fe4-afcf-4a28a7bfd161",
    "name": "충청남도교육청",
    "statusText": "🔴 문제",
    "schools": "7",
    "expected": "420",
    "attendance": "108 / 8",
    "accidents": "0",
    "emojiCounts": {
      "green": 4,
      "yellow": 1,
      "red": 2
    },
    "managerFilled": false,
    "districts": [
      {
        "name": "[연습] 충남서산교육지원청",
        "stats": "학교 2곳 · 응시 예정 110명 · 🔴 1 · 🟡 0 · 🟢 1",
        "rows": [
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 충남서산중앙고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "0 / 66",
            "supervisors": "8",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 66명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 충남서산고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "44 / 44",
            "supervisors": "6",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      },
      {
        "name": "[연습] 충남아산교육지원청",
        "stats": "학교 3곳 · 응시 예정 198명 · 🔴 1 · 🟡 0 · 🟢 2",
        "rows": [
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 충남아산서부고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "0 / 66",
            "supervisors": "8",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 66명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 충남아산고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "88 / 88",
            "supervisors": "10",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 4",
            "attendance": "54 / 4",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 충남아산중앙고등학교",
            "students": "44",
            "roomsSeats": "2 / 60",
            "seats": "44 / 44",
            "supervisors": "6",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      },
      {
        "name": "[연습] 충남천안교육지원청",
        "stats": "학교 2곳 · 응시 예정 112명 · 🔴 0 · 🟡 1 · 🟢 1",
        "rows": [
          {
            "statusTitle": "확인 필요",
            "emoji": "🟡",
            "school": "[연습] 충남천안고등학교",
            "students": "24",
            "roomsSeats": "2 / 24",
            "seats": "24 / 24",
            "supervisors": "4",
            "checklist": "100%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 충남천안중앙고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "88 / 88",
            "supervisors": "10",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 4",
            "attendance": "54 / 4",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      }
    ]
  },
  {
    "provinceId": "33569f59-ab06-4574-bb70-76c79019ee46",
    "name": "충청북도교육청",
    "statusText": "🔴 문제",
    "schools": "5",
    "expected": "332",
    "attendance": "108 / 8",
    "accidents": "2",
    "emojiCounts": {
      "green": 2,
      "yellow": 0,
      "red": 3
    },
    "managerFilled": false,
    "districts": [
      {
        "name": "[연습] 충북청주교육지원청",
        "stats": "학교 3곳 · 응시 예정 178명 · 🔴 2 · 🟡 0 · 🟢 1",
        "rows": [
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 충북청주중앙고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "0 / 66",
            "supervisors": "8",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 66명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "문제: 준비 부족",
            "emoji": "🔴",
            "school": "[연습] 충북청주고등학교",
            "students": "24",
            "roomsSeats": "2 / 24",
            "seats": "0 / 24",
            "supervisors": "4",
            "checklist": "0%",
            "items": "0 / 3",
            "arrivals": "0 / 2",
            "attendance": "0 / 0",
            "accidents": "0",
            "reasons": [
              {
                "level": "red",
                "text": "● 준비 체크리스트 0% (0/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 24명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 충북청주서부고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "88 / 88",
            "supervisors": "10",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 4",
            "attendance": "54 / 4",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      },
      {
        "name": "[연습] 충북충주교육지원청",
        "stats": "학교 2곳 · 응시 예정 154명 · 🔴 1 · 🟡 0 · 🟢 1",
        "rows": [
          {
            "statusTitle": "문제: 처리 중인 사고가 있음",
            "emoji": "🔴",
            "school": "[연습] 충북충주고등학교",
            "students": "66",
            "roomsSeats": "3 / 90",
            "seats": "0 / 66",
            "supervisors": "8",
            "checklist": "25%",
            "items": "0 / 3",
            "arrivals": "0 / 3",
            "attendance": "0 / 0",
            "accidents": "1",
            "reasons": [
              {
                "level": "red",
                "text": "● 처리 중인 사고 1건"
              },
              {
                "level": "red",
                "text": "● 준비 체크리스트 25% (1/4, 70% 미만)"
              },
              {
                "level": "amber",
                "text": "○ 좌석 미배정 66명"
              },
              {
                "level": "amber",
                "text": "○ 물품 미수령 3건"
              }
            ],
            "normal": null
          },
          {
            "statusTitle": "정상",
            "emoji": "🟢",
            "school": "[연습] 충북충주중앙고등학교",
            "students": "88",
            "roomsSeats": "4 / 120",
            "seats": "88 / 88",
            "supervisors": "10",
            "checklist": "100%",
            "items": "3 / 3",
            "arrivals": "0 / 4",
            "attendance": "54 / 4",
            "accidents": "0",
            "reasons": [],
            "normal": "이상 없음"
          }
        ]
      }
    ]
  }
];

export interface ReportRow { provinceId: string; name: string; emoji: string; schools: string; expected: string; checklist: string; seats: string; items: string; attendance: string; rate: string; accidents: string; red: string; yellow: string; green: string; }
export const reportRows: ReportRow[] = [
  {
    "provinceId": "928066c8-bc5c-4ddf-97b2-44217248c17a",
    "name": "강원특별자치도교육청",
    "emoji": "🔴",
    "schools": "7",
    "expected": "420",
    "checklist": "79%",
    "seats": "69%",
    "items": "43%",
    "attendance": "108 / 8",
    "rate": "26%",
    "accidents": "2",
    "red": "2",
    "yellow": "2",
    "green": "3"
  },
  {
    "provinceId": "2f544427-d572-4e8a-8678-0121b8c34244",
    "name": "경기도교육청",
    "emoji": "🔴",
    "schools": "5",
    "expected": "288",
    "checklist": "45%",
    "seats": "31%",
    "items": "0%",
    "attendance": "0 / 0",
    "rate": "0%",
    "accidents": "1",
    "red": "3",
    "yellow": "2",
    "green": "0"
  },
  {
    "provinceId": "cdf595d3-3447-4498-a537-5cb457a60669",
    "name": "경상남도교육청",
    "emoji": "🔴",
    "schools": "5",
    "expected": "288",
    "checklist": "50%",
    "seats": "61%",
    "items": "0%",
    "attendance": "0 / 0",
    "rate": "0%",
    "accidents": "2",
    "red": "3",
    "yellow": "2",
    "green": "0"
  },
  {
    "provinceId": "6ff98475-a111-43de-b63f-d317bc188674",
    "name": "경상북도교육청",
    "emoji": "🔴",
    "schools": "7",
    "expected": "420",
    "checklist": "50%",
    "seats": "48%",
    "items": "14%",
    "attendance": "0 / 0",
    "rate": "0%",
    "accidents": "2",
    "red": "4",
    "yellow": "2",
    "green": "1"
  },
  {
    "provinceId": "e0ebc7fd-80a3-4eae-bbb7-a16bb6fd8d42",
    "name": "대구광역시교육청",
    "emoji": "🔴",
    "schools": "7",
    "expected": "420",
    "checklist": "50%",
    "seats": "37%",
    "items": "0%",
    "attendance": "0 / 0",
    "rate": "0%",
    "accidents": "2",
    "red": "4",
    "yellow": "3",
    "green": "0"
  },
  {
    "provinceId": "f2d2be52-fb49-4a06-aab5-b62dcb463729",
    "name": "대전광역시교육청",
    "emoji": "🔴",
    "schools": "7",
    "expected": "420",
    "checklist": "79%",
    "seats": "58%",
    "items": "71%",
    "attendance": "54 / 4",
    "rate": "13%",
    "accidents": "2",
    "red": "2",
    "yellow": "0",
    "green": "5"
  },
  {
    "provinceId": "c84fb102-7806-4e51-abce-eab026c150b4",
    "name": "부산광역시교육청",
    "emoji": "🔴",
    "schools": "5",
    "expected": "288",
    "checklist": "40%",
    "seats": "61%",
    "items": "40%",
    "attendance": "0 / 0",
    "rate": "0%",
    "accidents": "0",
    "red": "3",
    "yellow": "0",
    "green": "2"
  },
  {
    "provinceId": "63f127bc-bef0-4c5b-a98f-53752bbd5d52",
    "name": "서울특별시교육청",
    "emoji": "🔴",
    "schools": "7",
    "expected": "420",
    "checklist": "71%",
    "seats": "79%",
    "items": "71%",
    "attendance": "82 / 6",
    "rate": "20%",
    "accidents": "0",
    "red": "2",
    "yellow": "0",
    "green": "5"
  },
  {
    "provinceId": "49ce5fac-3af9-4ad9-929e-fa0e15bab50f",
    "name": "세종특별자치시교육청",
    "emoji": "🔴",
    "schools": "7",
    "expected": "420",
    "checklist": "71%",
    "seats": "58%",
    "items": "29%",
    "attendance": "0 / 0",
    "rate": "0%",
    "accidents": "0",
    "red": "2",
    "yellow": "3",
    "green": "2"
  },
  {
    "provinceId": "03c9769d-3268-4ed3-b34a-7d9e09b3f2c7",
    "name": "울산광역시교육청",
    "emoji": "🔴",
    "schools": "5",
    "expected": "244",
    "checklist": "80%",
    "seats": "90%",
    "items": "80%",
    "attendance": "54 / 4",
    "rate": "22%",
    "accidents": "0",
    "red": "1",
    "yellow": "0",
    "green": "4"
  },
  {
    "provinceId": "9719a862-42f4-4c2a-b7f5-ef12cff81595",
    "name": "인천광역시교육청",
    "emoji": "🔴",
    "schools": "5",
    "expected": "332",
    "checklist": "55%",
    "seats": "40%",
    "items": "0%",
    "attendance": "0 / 0",
    "rate": "0%",
    "accidents": "3",
    "red": "3",
    "yellow": "2",
    "green": "0"
  },
  {
    "provinceId": "884489b4-b3d2-408f-a0e9-31bf328d41b4",
    "name": "전남광주통합특별시교육청",
    "emoji": "🔴",
    "schools": "5",
    "expected": "244",
    "checklist": "45%",
    "seats": "36%",
    "items": "40%",
    "attendance": "0 / 0",
    "rate": "0%",
    "accidents": "1",
    "red": "3",
    "yellow": "0",
    "green": "2"
  },
  {
    "provinceId": "8808afe0-b53a-4c5f-bc6f-dbf676e57dd3",
    "name": "전북특별자치도교육청",
    "emoji": "🔴",
    "schools": "12",
    "expected": "1032",
    "checklist": "24%",
    "seats": "83%",
    "items": "14%",
    "attendance": "352 / 18",
    "rate": "34%",
    "accidents": "4",
    "red": "10",
    "yellow": "1",
    "green": "1"
  },
  {
    "provinceId": "71ce40ac-d46a-4393-ac96-f5794cf2e747",
    "name": "제주특별자치도교육청",
    "emoji": "🔴",
    "schools": "7",
    "expected": "420",
    "checklist": "79%",
    "seats": "79%",
    "items": "57%",
    "attendance": "82 / 6",
    "rate": "20%",
    "accidents": "2",
    "red": "2",
    "yellow": "1",
    "green": "4"
  },
  {
    "provinceId": "87936317-4f8e-4fe4-afcf-4a28a7bfd161",
    "name": "충청남도교육청",
    "emoji": "🔴",
    "schools": "7",
    "expected": "420",
    "checklist": "71%",
    "seats": "69%",
    "items": "57%",
    "attendance": "108 / 8",
    "rate": "26%",
    "accidents": "0",
    "red": "2",
    "yellow": "1",
    "green": "4"
  },
  {
    "provinceId": "33569f59-ab06-4574-bb70-76c79019ee46",
    "name": "충청북도교육청",
    "emoji": "🔴",
    "schools": "5",
    "expected": "332",
    "checklist": "50%",
    "seats": "53%",
    "items": "40%",
    "attendance": "108 / 8",
    "rate": "33%",
    "accidents": "2",
    "red": "3",
    "yellow": "0",
    "green": "2"
  }
];

export interface Notice { date: string; target: string; urgent: boolean; title: string; body: string; confirmed: number; total: number; unconfirmed: string[]; }
export const notices: Notice[] = [
  {
    "date": "2026. 9. 26. 오전 9:28:27",
    "target": "서울특별시교육청",
    "urgent": false,
    "title": "[상태 알림] 서울특별시교육청 · 문제",
    "body": "서울특별시교육청 시험 준비 상태: 🔴 문제\n학교 7곳 중 🔴 문제 2곳 · 🟡 확인 필요 0곳\n- 🔴 [연습] 서울강동중앙고등학교 ([연습] 서울강동교육지원청): 준비 체크리스트 0% (0/4, 70% 미만)\n- 🔴 [연습] 서울강서서부고등학교 ([연습] 서울강서교육지원청): 준비 체크리스트 0% (0/4, 70% 미만)\n\n[연습] 본부 화면 시험: 서울만 확인해 주세요.",
    "confirmed": 0,
    "total": 1,
    "unconfirmed": [
      "서울특별시교육청"
    ]
  },
  {
    "date": "2026. 9. 25. 오후 11:44:58",
    "target": "서울특별시교육청",
    "urgent": false,
    "title": "[연습] 본부 화면 시험 발송 (서울만)",
    "body": "본부 화면에서 서울에만 보낸 시험 공지입니다.",
    "confirmed": 1,
    "total": 1,
    "unconfirmed": []
  },
  {
    "date": "2026. 9. 25. 오후 11:36:22",
    "target": "전체 도교육청",
    "urgent": false,
    "title": "[연습] 본부: 시험 당일 종합 보고 안내",
    "body": "시험 종료 후 30분 이내에 도교육청별 종합 현황을 확인해 보고해 주세요.",
    "confirmed": 0,
    "total": 16,
    "unconfirmed": [
      "강원특별자치도교육청",
      "경기도교육청",
      "경상남도교육청",
      "경상북도교육청",
      "대구광역시교육청",
      "대전광역시교육청",
      "부산광역시교육청",
      "서울특별시교육청",
      "세종특별자치시교육청",
      "울산광역시교육청",
      "인천광역시교육청",
      "전남광주통합특별시교육청",
      "전북특별자치도교육청",
      "제주특별자치도교육청",
      "충청남도교육청",
      "충청북도교육청"
    ]
  },
  {
    "date": "2026. 9. 25. 오후 11:36:22",
    "target": "전북특별자치도교육청",
    "urgent": true,
    "title": "[긴급][연습] 본부: 전북 시험지 배송 지연 점검",
    "body": "전북 지역 시험지 배송 상태를 확인하고 회신해 주세요.",
    "confirmed": 0,
    "total": 1,
    "unconfirmed": [
      "전북특별자치도교육청"
    ]
  }
];

export interface ImportField { name: string; required: boolean; note: string; }
export interface ImportType { key: string; label: string; uploader: string; fields: ImportField[]; }
export const importTypes: ImportType[] = [
  {
    "key": "district",
    "label": "지구 (도교육청 지정)",
    "uploader": "본부만",
    "fields": [
      {
        "name": "지구명",
        "required": true,
        "note": "필수. 이미 있는 지구와 이름이 같으면 저장되지 않습니다"
      },
      {
        "name": "도교육청",
        "required": true,
        "note": "필수. 도교육청 목록에 있는 이름과 똑같이 적어야 합니다"
      }
    ]
  },
  {
    "key": "school",
    "label": "학교 (도교육청·지구 포함)",
    "uploader": "본부만",
    "fields": [
      {
        "name": "학교명",
        "required": true,
        "note": "필수. 같은 이름의 학교가 이미 있으면 저장되지 않습니다"
      },
      {
        "name": "도교육청",
        "required": false,
        "note": "선택. 적으면 지구가 그 도교육청 소속인지 확인합니다"
      },
      {
        "name": "지구명",
        "required": true,
        "note": "필수. 미리 등록된 지구 이름과 똑같이 적어야 합니다"
      },
      {
        "name": "주소",
        "required": false,
        "note": "선택"
      },
      {
        "name": "책임자",
        "required": false,
        "note": "선택. 학교 책임자 이름"
      },
      {
        "name": "연락처",
        "required": false,
        "note": "선택. 학교 책임자 연락처"
      }
    ]
  },
  {
    "key": "exam",
    "label": "시험",
    "uploader": "본부만",
    "fields": [
      {
        "name": "시험명",
        "required": true,
        "note": "필수. 같은 이름의 시험이 이미 있으면 저장되지 않습니다"
      },
      {
        "name": "학년도",
        "required": true,
        "note": "필수. 숫자 (예: 2027)"
      },
      {
        "name": "시험일",
        "required": true,
        "note": "필수. 2026-11-19 형식"
      }
    ]
  },
  {
    "key": "period",
    "label": "교시",
    "uploader": "본부만",
    "fields": [
      {
        "name": "시험명",
        "required": true,
        "note": "필수. 이미 등록된 시험 이름과 똑같이"
      },
      {
        "name": "교시",
        "required": true,
        "note": "필수. 1~8. 같은 시험에서 같은 교시가 이미 있으면 저장되지 않습니다"
      },
      {
        "name": "과목명",
        "required": true,
        "note": "필수"
      },
      {
        "name": "시작",
        "required": true,
        "note": "필수. 08:40 형식(글자로 적어 주세요)"
      },
      {
        "name": "종료",
        "required": true,
        "note": "필수. 10:00 형식(글자로 적어 주세요)"
      }
    ]
  },
  {
    "key": "item",
    "label": "시험 물품 (전국 학교)",
    "uploader": "본부만",
    "fields": [
      {
        "name": "시험명",
        "required": true,
        "note": "필수. 이미 등록된 시험 이름과 똑같이"
      },
      {
        "name": "학교명",
        "required": true,
        "note": "필수. 이미 등록된 학교 이름과 똑같이"
      },
      {
        "name": "물품명",
        "required": true,
        "note": "필수"
      },
      {
        "name": "수량",
        "required": true,
        "note": "필수. 1 이상"
      }
    ]
  }
];
