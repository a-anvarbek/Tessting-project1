import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const MainWrapper = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 25px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin-top: 15px;
  padding: ${(props) => props.padding || "15px"};
  background-color: ${(props) => props.color || "#fff"};
  border: ${(props) => props.border || "none"};
`;

const Section = styled.div`
  padding: ${(props) => props.padding || "0"};
  width: 100%;
  border-top: 1px solid #ccc;
  background-color: ${(props) => props.color || ""};
  border-radius: ${(props) => props.borderRadius || "none"};
  &:first-child {
    border-top: none;
  }
  cursor: pointer;
`;

const SectionHeader = styled.div`
  width: 100%;
  height: ${(props) => props.height || "60px"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  padding: 10px;
  padding-bottom: ${(props) => props.paddingBottom || ""};
`;

const P = styled.h3`
  font-size: ${(props) => props.fontSize || "20px"};
  width: 100%;
  color: ${(props) => props.color || ""};
  text-align: ${(props) => props.textAlign || ""};
  margin-left: ${(props) => props.marginLeft || ""};
  font-weight: normal;
`;

const Button = styled.button`
  border: none;
  background-color: #fff;
  width: 31.09px;
  height: 18px;
`;

const Indicator = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: ${(props) => props.color || "#ccc"};
  border-radius: 50%;
  margin-right: 15px;
`;

const menuData = [
  {
    name: "Возможновти ИГРУМА",
  },
  {
    name: "Правила ИГРУМА",
  },
  {
    name: "Инструкция РУМЕРА",
  },
  {
    name: "Инструкция МАСТЕРА",
  },
  {
    name: "Инструкция МЕСТА",
  },
  {
    name: "Пользовательское соглашение",
  },
];

const Menu = () => {
  return (
    <Wrapper>
      <MainWrapper>
        <Section>
          <SectionHeader height="auto" paddingBottom="10px">
            <P color="#434343" fontSize="18px">
              Я профессиональный скуф, обажаю сидеть дома и часто играю в Мафию
              с друзьями по вечера в Сицилии и зовем всех желающ и разные другие
              дела...
              <Button>
                <svg
                  width="19"
                  height="32"
                  viewBox="0 0 19 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_6_800)">
                    <path
                      d="M18.3957 16.0002C18.3957 16.6459 18.1494 17.2916 17.6619 17.7859L4.68838 30.8057C3.70318 31.7894 2.1148 31.7894 1.1296 30.8057C0.149427 29.817 0.149427 28.2229 1.1296 27.2342L12.3287 15.9951L1.1296 4.76112C0.149426 3.77744 0.149426 2.17835 1.1296 1.19468C2.10977 0.211006 3.70318 0.211006 4.68335 1.19468L17.6568 14.2144C18.1494 14.7088 18.3907 15.3545 18.3907 16.0002L18.3957 16.0002Z"
                      fill="#A7A7A7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_800">
                      <rect
                        width="31.084"
                        height="18"
                        fill="white"
                        transform="translate(0.395752 31.5421) rotate(-90)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
            </P>
          </SectionHeader>
        </Section>

        <Section>
          <SectionHeader>
            <P color="#434343" fontSize="18px">
              Мой телеграм
            </P>
            <P textAlign="right" fontSize="18px">
              @ribakit3
            </P>
          </SectionHeader>
        </Section>
      </MainWrapper>

      <MainWrapper>
        {menuData.map((menu, index) => (
          <Section key={index}>
            <SectionHeader>
              <Indicator />
              <P color="#434343" fontSize="20px">
                {menu.name}
              </P>
            </SectionHeader>
          </Section>
        ))}
      </MainWrapper>

      <MainWrapper>
        <Section>
          <SectionHeader>
            <Button>
              <svg
                width="24"
                height="28"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_6_688)">
                  <path
                    d="M1.5729 25.969C0.752533 25.969 0.086731 25.3154 0.086731 24.5101V5.83565C0.086731 5.03031 0.752533 4.37671 1.5729 4.37671H13.3612C14.1815 4.37671 14.8473 5.03031 14.8473 5.83565C14.8473 6.64099 14.1815 7.29459 13.3612 7.29459H3.05906V24.5101C3.05906 25.3154 2.39326 25.969 1.5729 25.969Z"
                    fill="#A7A7A7"
                  />
                  <path
                    d="M21.6599 28C21.541 28 21.4192 27.9854 21.3003 27.9562L13.0015 25.9254C12.3387 25.762 11.875 25.1784 11.875 24.5102V5.83576C11.875 5.29887 12.1752 4.80575 12.6567 4.55189L20.9585 0.17507C21.4192 -0.0671144 21.975 -0.0554429 22.4238 0.207167C22.8726 0.469776 23.1461 0.945391 23.1461 1.45894V26.5411C23.1461 26.9904 22.9351 27.4135 22.5754 27.6907C22.3109 27.892 21.9899 28 21.6599 28ZM14.8473 23.3693L20.1738 24.6736V3.89829L14.8473 6.70821V23.3693Z"
                    fill="#A7A7A7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_688">
                    <rect
                      width="23.0623"
                      height="28"
                      fill="white"
                      transform="translate(0.086731)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Button>
            <P marginLeft="15px" color="#434343">Выйти из профиля</P>
          </SectionHeader>
        </Section>
      </MainWrapper>
    </Wrapper>
  );
};

export default Menu;
