import React, { useState } from 'react';

import Item from './Item'

function Main() {
    const [count, setCount] = useState(0);
    let index = 0;

    return (
        <>
            <div className="main-bg">
                <div className="main-title">
                    <h3 className="me-2">Product List - {count}</h3>
                    <button
                    className="btn btn-primary"
                    onClick={() => setCount(count + 1)}
                    >
                        Tăng
                    </button>

                    <button 
                    className="btn btn-primary"
                    onClick={() => setCount(count - 1)}
                    >
                        Giảm
                    </button>
                </div>
            </div>
            <div className="main-container container">
                <div className="row">
                    <div className="col-lg-3 col-md-12 order-lg-1 order-2">
                        <div className="list-group rounded-0 mb-4">
                            <a href="#" className="list-group-item list-group-item-action">Apple</a>
                            <a href="#" className="list-group-item list-group-item-action">Samsung</a>
                            <a href="#" className="list-group-item list-group-item-action">Sony</a>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12 order-lg-2 order-1">
                        <div className="row" id="product-list">
                            <Item name="Product 1" price={2000000} isNew src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUSEhIVFRUWFRUVFRYVFRUVFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy8dHR0vKy0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8tLS0tLSstLS0tLS0tLS0tLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIFBgMEBwj/xABPEAABAwIBBgYKDwcEAgMAAAABAAIDBBEhBQYSMUFREyJhcZGzIzJzdIGCk6Gx0QcUFiQzQlRykrK0wdLT8DRSVWKUoqQVQ2Thg/FTY4T/xAAZAQADAQEBAAAAAAAAAAAAAAAAAgMBBAX/xAAnEQEAAgIBAwMFAQEBAAAAAAAAAQIDETESITIEQXETIlFh8PFCI//aAAwDAQACEQMRAD8A7iqvlgudWaBe8N0aXite5ou6WoDjgdoa0H5oVoVXyqffvi0nW1KW3B6cpB2TIv5/pv8AWmnJ0f8AP9N/rWCvqC6QsBIa0C9jYlxxseSxHSVSM5M7YqdxjjjEjx22IAHm9SXR9xC9nJ7P5/pv9aYaBm9/03+tc5yVnb7Y0m8HwbgL/Fc22+9sP1im1WV5hqfbxWepGpNGnRHUbN7/AKb/AFrG6lbvf9N3rXMRnBUtdcSu8Fh6BjzG45Cuj5LrOGhZIdZHGtq0gS11uS4KWdwaIiT3QDe/6bvWteoiAaTpPwaSOO/dzrbeVq1Z4jvmu9BWbN0w4/lvOfKETowypc29PTuI0Y3cZ0LC43e0nXe+8m+tR3uzyn8rd5OD8tNzmHHi72p+pYoQrrmsQhCeGeWU/lb/ACcH5aPdnlP5W/ycH5agkqzpgJ0Z45T+Vv8AJw/gThnhlP5W/wAnB+WoIJQt6Yam/djlL5W/WR8HT6xa/wATlS+6/Kfyt/k4Py1Cfq3PrsPAlWxSBpNe6/Kfyx/k4Py0vuvyn8sf5OD8tQwSALeiPwNJr3X5T+Vv8nB+WlGd2Uvlb/J0/wCWoWyULeiv4Gl8zSy7WyuBkqXutUULbWY3ivrIQ8cRo1i4O8EjUSu9grztmLv/AOXk/wA1bB616HjFgByBJkrET2TschCFMoQhCAEIQgBVTLH7b4tH1tSrWqnlv9s8Wk62pS34Pj5MrnnhJra8Lc/BtsuGsnLZpC+MPJc8aL7jF2DTztFrA7l2bKs1pZOcfUYqhlmhpXkvlY3lOkY8fnNIKKzrue1dqtmzTy+2OxOA0YZXzE4tEWjYtJ3lxYAN9tymop4xI0yC7L8YciSJ7Yo3RxG0b3BzgCDpFva3drcBsuTrVazgyyImnRxdq5ifvRPcRGoSeemVKZshFIDbRxuLAHHG3Nb9a+m5puvSs55OscvPNPV8ICbWO3G+vbdegc0He9Wc7+scp37QpjTLytSr7R3zXegrZcVq1R4rvmu9BSQq4hnO7jw97U3nhYoQqWzjPHj72puojUUu2Z25Y4AShIE4oacEBNQtaeEoTQUoTQDglCQJwTAqalT4Yy5wA/8AQ3rQtuZ2Gg3aamgcfDXQW8wHSvQzdQXnvNNvHHfWTwOYVsFl6EbqChkn7k78lQhCQgQhCAEIQgBVHL37Z4tJ1tSrcqfl9w9tnkbSX8pUn70l+FMXkhM5J9GR5PKehka5JW1D6qRxLgDjohzg1oA2XcQB+tq6lnQ7shB23+pGuT1mTZhIeBLH2dfjFnGsb2tJxXDePNZFNe58kT7G5Kmc2R0RLmlzHEHHttDTZhuIGvZcKLytcssNZLfSrJSVAZw1RUkPqXRuihjaG6LC9ug6Z5YAwaDbhrGi1yNQCgJmgix1LZ57FrE61LQo43N0w4WOHoK9CZoH3qznf9dy4EGBoNtusk3J8JXe80D71j8f67kl1sUd+yacVq1R4rvmn0LM8rWqjxXfNPoU1Z4cRzj7eLvam6iNRKls5O3i72puojUSF1uSCgJyRCZpQlTQlWtOSpoTwmhgslCRF1oKtylOibDWdfINy1tQ0tuxbWTo9v65PP6EbG1rzSZjc/KqD7dAvQDdQXGs0KLQgMztXtijA8Wsh0nfd4CuyM1DmUJncktByEIWECEIQAhCEAKl5dPvx/NR/WnV0VJzgPvuTmo/rTpL8KYvJS8/pyJA0HA6V/A2PBc7ynlJjDY4+EK9+yC7so8f6sa5E1oMxa92iC88Y3s0HU4gYmwtgjHG9Hy21MpWCsbLfR2YkbhvTJCtjJWTdKqeIJC+KKCV80pBDSxsZ0zY4gFxaADjchabymmNTotZ3GzHld4zQPvWPx/ruXBXFd2zTd71Z4/13Kd1sXKZe5a1U7iu5j6Fke5atS7iu5j6FNaXHc4xx4u9qbqI1Dqazj7eLvam6iNQ5XW44IEJUhWtKClTU5MCpbpqCmgHJ8TL8yxhZeEARMhsmPSI5FJ0NI95axg47yGt5zrPMBjzArTpW9K6PmZkbQZw7xxnDiX+Kza7kv6OdSyX6Y22teqdJiWnZDSCMamyUbBfWSKqHHnOJ6V0hq4vVZZ9sSOa09jZPRhvKfbkN3Hnt0DnXaAoYuG+ojVioQhVc4QhCAEIQgBUjOI++5Oaj+tUK7qm50/tJ+ZS9ZUpL8KYvJSs9smueQ9voJGwEEAE7G2NthvruqNPkEuPHha7x9E9LSD4CuykA60zgGblKLah1WxxMuNf6bVNjdEwBsbyC5rXN42ji3SN7uAOIGq+K0HZDqP3POF3Iws3BMMLNy3rZ9KHFaTNyZ7gC02Jxtcm3IRgOckLsOR6cxQsYdYGPOSSfSs+g0bE171kzs1axU571q1D8DzH0JXvWvO7A8xRBnLs5O3i72puojUO5TGc2D4u9qbqI1CuXW44F0XSIQ0t0t01KtYcUt01CYMsSWnZpOvsCcGWHKcOYLbpIdmxEiU3mpkszzsj2E6TuSNttI+ho5SFa89M5GtDqaCxOLXuGoWw4NvNt5rfvAQbK72nE6GM2qJgDM8a6eIDixN3SG+kd2kBrGEIxt+QDADcBsXDmvufh2+nxdtymc228V5P/wA1ET/VxL0KFwjNeO39TQfbYV2Spy/TRzNp3SdleCWtDXuvYgHEC1+MMNdrnUCmxTHSh6qJ6+yTQhCs5AhCEAIQhACpWdD71LxuZSD++pP3q6qjZzftUvzaT61Qkvwpi8mAOQXrFpJpcou5lL0wvWIvWNz0Bkc9YXvTHPWMuWg5zlgmdgeYpXOWCV2B5kMlQ85IQ50eNiKamx/8EevFV6SMg4hTWcsnGjH/ABqbk/2GdKhr3XfPTMftxQxXRdPMR2YrGpzGmnIum3SoByyxt2lMjbtTnP8AMniPdrYiFypCOp4O2h2+zbY7DbaeRR0cthhrPmW1Ss27Tq9a582XXaF8OHqnctqJh1E3JN3Em5JOu5OvbjtuVvQRrDBGpCliuV597PSiE7kJmiwutqnojbfashNlacq1UenJPANF2TjM4AjB7WnszLDUNHTt4FX8nstE7utJ9riVmqIGx5Vmjd2lTGx5B1We0wvA+hfxlTFaejf7cObU5Z+F2yfVCWJko+O1rrbri5Hg1LYVX9jioc6ibG/F8L3wvO97DxrclyR4FaF2VncRLgvGrTAQhCYoQhCAFSM6mgVLzvZSE6/36kfcruqTnd+0O7nS9ZVJL8KYvJFlyY5yxl6YXKTuPc5Yy5ISmEoBS5Y3OSOcsbnIYHOWGR2BSucsTygSomcbOPEf+NTdQxRh0VI5yuOnF3tTdRGoiy7olxQyCSyxuZf9YJwCe1+zD7+lNzyGDgXbj4MVmFMRi/Abtp9S2WvNuU+YfrHo3rHUDHmFvWm+nWO5ohryPWLkTpSiJnSVHLfpPSnVP6bVJFfXqGvl3BS1PHdYKWDADd5ztP63BS9JTErzcl3pUqWCElTNJT2TqWltsUvSUu0rkmeqdKWtpnoYBwdjqM9EDswNZCDiFYs/49CejqBhxnwu8cB7Ojg39KiIhZo74ovtkCtHshU2nQyOGuItmHIInBz/AOzT6V3Yq/8AlMPMy21miWpmrJoV1ZFhaTg6mMD92Ro4Q85kc/oVvXPaOoDauhqNksb6Z53lp04h0zPPiroSvincIZo1YIQhUSCEIQAqPnh+0P7nS9ZVK8KjZ5fDv7nS9ZVJL8K4fJBEppKaSmlyjt2nEphckLljc5DCucsLnIc5MJWgErG8pXFY3FAUnOR/Hj72puojUPpXUtnG3jx97U3URqJ0l2uKDtErNELaR3DpO70+C6wtctqMWHn9Xr8KpVsFBtifD6lqzSp0z1qvuSGtFydgRe+oN+iA7SpehoyMXDjHZ+6PX6E7J9BweJsZOkM5t7vQpmjpl5WbK78OLUdzqOl2KwUVJZNoKRTVPCvPvfbp4JS021bhFk4CyxyOT07Iz3ZYzxR3xRfbIF0Wrp2yRvjcLte1zHDkcCD5iubQu4o74oftsC6evR9P4PO9T5uRQPf/AKe1xF5aSoifYbHtf7XkPMBIT4q6zBKHta8anAOHMRcLnrqH35X0mps7Xln/AOiK+l5Qu6FZ8xK0zUMDiLEMDSNrdHANO4gWW4u0zDc/eIt/d/8AE+hCFdzBCEIAVFz0+Hf3Ol6yqV6VEz2+Gf3Ol6yqSX4Vw+SuEppckJTSVF2guTHOQSmErWEJTSUEppKyWGuKxuKc4pjkQFJzlJ04+9qbqI1FNaprOLt4+9qbqI1F2XdEOOCws6NvqTppf+1jkksElNEZDibDadfQNpTTeKwesTM6gwNLjZo/W8qRo4Wx9ri463fc3cENLLkMbojDlNhqudp27BjqGAG7SQYrgz5ur4d+LB0955bdFT3U/R0q1aKGynKVi8zJZ1Q2aWFb8bLLFCFn0lKsJ2k15WtI9PmetKeWysTTZgkwA/5ND9tgXV1x2gde3fNB9tgXYl6PpZ3R5/qo+9SM7mcFlCmnH+5G6I88TtNnWP6FtZkHg5q2mv2lQZW/Mn7I0DkDXMCd7JEHvVs22CeJ+GuzncE7wWkv4q0MmThmUYH7KqlLPHgdxjz6JhCae2T++BH3Yvj/AFekIQruYIQhACoee/wz+50nWVSvioWfPw0nc6TralJk4UxeStEphQSkKi7CFYyU5yYVoIUwp5TClBpTHJ5Ca7UVsCVOzgF3x8lNT9RGo4M6SuiTex/VzmJ2lExvAQAlziTxYWA4Nad28LSz2zdbk6kZwZMkkzzHJMRYMbok8HG250NLHG5JDXC9iQuyctax+Zc1KTOoc7lOK2abAXO3Ac369CwNiWaV2pu79Fc17TZ348cUbNOQprJ5xVdY8qcoXWAXLkh0VlZqSylIXKvU9RZSUFSuK1ZUjum45E50qjo5k4zBT3pk0ZpZVoSy3WKpqFqSTqsdyTVL5Nfq75oPt0C7OuHZFfcjvmg+3QLuK9P0sao8v1fm0cu0XD080O18b2jnLTonpsucw1p9qUdUMDBURl+/g5Roubjve2ILqi5kaFwblGkAu4OmdENml+0wNt4Gi/Imyx3iS4J7TDpqFGZsVgmpIJAb3jaL7y3ik9IKk1aJ3G0JjU6CEIWsCoOffwsnc6TralX5UDPz4WTudJ1tSkycKYvJWEhSppUXYaU0pzk1aDSksn2RZZoMZCZIMDzFZ7JsjcDzH0I0JdJo/gou5RfUakq6WOVjo5WNexws5rhdpHKEUh7FF3KL6jVkusnlGvCgZX9jOGzn0rnNIBLY3nSBIGDQ84i+rG/OuT5ToJ6d2jPFJEScOEaWg/NJwd4F6XukeAQQQCDrBxB5wdayJ0rGW3EvNNO8DErcZWY4LsuVMxMmz3vTiNx+ND2I8+iOITztKqOUvYrkZxqWoa/+SYaDvKNuCfFCJ1K8ZomNcKnHWKSpaxReU8kVNMffEL4/5iAWHmkaS0nkukp3FRtSJdNJ2tdPUXT5pcFBQTkLYNRcLlnF3dHsfPOtOaqAxJsFiqJtfJrUFVzkm58C6MePaF56XQ8yQ2UPdjZs9CRykVsGvpC7ovN+YVSbBl9dXQEjmrae33r0gu/FXpq8f1NurIFSsr9hymH7JoWP53wyaL7byWPYLK6qpeyDFoinnAxjm0CdzJRY9Lmxoy+PwTDP36/J3sfdjimpfk88kbR/9ekRGfCG38KtapuQ5dDKUo+LU08U198jBwRA8ERPjcquS3HP2syxqwQhCdMLn+fvwsnc6TraldAXP8/vhZO50nW1KTJwpi8lYSFOCLKLsMISWWTRRooDakoGgkXd2txe1yePa+H8nn2jEo6jaLYnWBs5itcNTg1YDzTDHXgbedv4j0JksAsfmk+n1JwakmbxTzH0IYvNKexRdyi6tqyXWCmPY4u5RdW1PusnklY7H3RdM0kXWN0yXSXWPSRdA0e6xBBFwcCDiCNxG1VnKeY9HLd0beAdvjtoeGLtfo6Ksd0XWGra1Z3EuWZYzUq4MQzhWfvRAk+Mzth4LjlVfMwA1ruWkozKmQ6Soxmha4/vYtf9NtielLMOunqp/wCoctp8gVksAlihL2vJIILbnRcW20Sb7FU6yNwJBGINjiDboXXM8MriniFHTDROiGmx7RhGDAdekRiTrsb6yCuYVENjbXv59yvjpqNyhlz2lL5hMtIO+cn/AG6FemF5xzOi0ZG985P+3Qr0crxLgyRqQobPCkMtFO0C7hGXtG98dpGjpaFMpCETG40SJ1O3OW1djk6qB1SugcdmjOwOueYRP+lyro65U2kPtKrpr40z3OGONqaXS88Yd0rpeS6oSwxyj47Gu8JAJHSo4Z9l88cT/fltIQhXc4XPs/8A4WTudJ11Sugrnuf/AMLJ3Oj66pSZOFMXkroCLJ7AnaKg7GKycGp4anBiGGBqeGp4YntYhrGGImZxXfNPoWcMROziu+afQt0yVlpz2OLuUXVtT7rFAexxdxi6tqW6S3LK8H3RdMui6Ux90Epl0XQDroum3SXQD7qGy9l+OAFrSHTEcVmvR/mfbUBrtrPnFYzkznle4x07i1gw0m4OfvId8Vu62vw2Fdc4RtJOLjr5933q1cfvINr6k3LibyOubnZc4uPKSom363p8jySSTr1+pKwgYnwKkyTmVizZjsWb/bVB562D1L0EvO+akhdIL/Kcn25Pf0C9ELacI+o8whCE6CjTQtZlSaN3aVEbHkbLPaYXj+wnwqS9judxoxG83fA98L+VzDj5yR4FqZ+N4OakqNmm+F3jgPbfybulZc2H6FdWRYWk4OpYP5XtGmfDIX9ChXtkmP7u6bfdiif7stqEIV3MFz32QPhZO50fXVK6Eue+yCOzPG0x0luW01Re2+1xfdcb0mThTF5IaNmCfoLNGzBPwUdOvbAI08RrOAE4WQGARpwjWcWTgW/oIG2JsaSoZxHfNd6CtgOb+rpJbFpF9YI6QtZtIwnscXcYuranXVFjzpygyOFjKAThtPT3k4dkZJ4Fl9JpBs6976sQcAgZ35T/AIV/lR/hSzjtstcldL1dF1RfdflP+Ff5Uf4UDO7Kf8J/yo/wrPp2N9Sq9XRdUb3WZU/hP+VH+FHutyp/CT/Us/Cj6dh9Sq8XUPnTlMQQn9592tHJ8Y8mBtzkKv8Autyp/CT/AFLPwqAy5U5VqpNM5PLQAAG8NGbDbjhrJPmTVxzvuIyVa3Dkm5wA3LQqZi44eDk/7WV+TspkW9okf+WP1rEMkZS+RO8pH+JWll8sT8MI8yY7ErYOSMpYe83eUj/El/0fKXyJ3lI/Wl0IyVhL5ojjjvnJ/wBugXoteeM0cm1jJWiWnLL1FCRxmuJDa2EusGm+AFzyAnUCvQ6evDny2ibbgIQhMkgc+KEzUUob27AJWW1l0R07DlIBHhUFkapDquimb/vU80Ljv4K0rB/e/oV7VYyfm4YKqPQxpmNnkZq0opZHNaIxjizQc+2GGjidSnakzaJhWl4is1lZ0IQqJBNehCAwlNKEIBUIQgFCVCEAJChCAR6xR7eZCEAyr7ToS5N7U86EIa32pUIQwIQhACEIQAhCEAIQhACEIQAhCEAIQhAf/9k=" />
                            <Item name="Product 2" price={3000000} isNew src="https://via.placeholder.com/500" />
                            <Item name="Product 3" price={4000000} src="https://via.placeholder.com/500" />
                            <Item name="Product 4" price={5000000} isNew src="https://via.placeholder.com/500" />
                            <Item name="Product 5" price={6000000} src="https://via.placeholder.com/500" />
                            <Item name="Product 6" price={700052000} src="https://via.placeholder.com/500" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Main;