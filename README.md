# Number Beautifier (test task)

### Conditions:
Given the function <i>numberWithSpaces</i> in <i>src/util/GetSpaceSeparatedNum/GetSpaceSeparatedNum.ts</i>
Study this function, describe how it works and what it is needed to
Rewrite the function using other, more understandable methods

### Requirements:
The original <i>numberWithSpaces</i> function should remain unchanged, your task is to implement a new function newFunc that performs the same actions
The entire task must be done on the website www.typescriptlang.org/play
To view the code execution log, you can use the “Logs” tab on the right side of the site

Tests:
There is a block with tests on the page, which should also remain unchanged. The task is considered completed if all tests complete without FAILED.

### Additional task:

There is a theoretical error in the code that will return undefined. If you find and correct it, it will be a huge plus when grading the test item.

### P.S
1) The execution of <i>numberWithSpaces</i> function in some cases might return the following values - <i>target = 5132.51321; x, false = 5.13B; x, true = 5 132.51321</i> , The abbreviation is not correct, isn't? Considering how other abbreviations works like - <i>target = 12345678; x, false = 12.34M; x, true = 12 345 678</i>, it turns out that from 5K the number turned into 5B. Thus this is the only step that failed during testing.

2) Hierarchy like <i>GetSpaceSeparatedNum/GetSpaceSeparatedNum.ts</i> was choosen to add more clarity cause running of .ts file generates .js files in the same directory.

3) <a href="https://www.typescriptlang.org/play?#code/PQKhAJHwQQBEEBhBCYQQHCCG4QQMiCF4QQfCDmY8nBGEDgNkCEQQaRB5ZBWEFPABZBOEHEH4QQYRB1AuEDsUHYQdWIHEQWGgGB5EHCAREA6dAYiCIxAfnAAocBEB4IKRaJAgiAjdE+OEDMIIlLUANOABOAUwCGAEwC2d63F6AWEGrJwAcgAFADoAZWD-cABGZnYuOgBacAALABdUgAcAZwAuYGAAcwBLVOSAVwAjYIBjAHsXYAARJycogE56AFZgADNamxcHVISAOzKXCrsbLNV1cEAiEFhAHhBwJcxANhBaalNkMXQ2UlRwXVJoNm42M9ZoTGpuWHBSYM5g8G9qXSP4XW2WamhqEtqIAJEFgWHAxkwXkQ6AhUlgjGQ1kEpGwukw30B4HQ204mGgAO4WFeIGAKnJoAgAEkRqkpj0HNU7FlgqkZqTyUVafTGXZwFyslNUjTUrVQqkbIEHDYHC4ZgBvNTgZUAD3FNhy4CyEq5BQA3ErlUUnCrNWMJlMDcrlQA3BwAG012psuoNAF9OdybAymeACnZUqEMrzQnZgzK6U4AHLjKUyuXgRXW8Cm8DmyY2K3WopZABiZXt9oAag6ynZNRVarV7Y4Ru7ySpKeAAEp2Fy1G12AAyDm1AGFktLGXSbKz2WSVHURtrbG2O93e6kB0PqiPwABecAACmdTp1IwKAEo9y6DxuAHyJw2z1JlGwjLUS4JZSrO3VbgAM1mdwRrB9K4BJFEh7ugaFJgOANKCjYwq0mKT5suoE5TjOApCiK8E2Bu27hrKuT8tO6FweqcZ4cej6ngUF5Xsm9i3ve27XsmuFysEapPlk9pFEyn7WCxLLGiqh7gAA1Ex1r8cEdr2qJ4nKpJ7Gjpx3F2FukmCYe14gSobpgY2EEAOIBkGIZhkOkYxi4SHkihqRpnYADu+YjNU2Fbte-Gav6gbBkyoa4RZsZDnKKjkW+Z7rpeSbWhKACeNHJtaNZ2YpJ66thCmsph77aYlSUBim6pdnYD6bopv4lQUpRZnlyWzi+9qpGlEWFRKNWJXVPT2rUQxxk1FHpZuABEQ1gXlRo9Nu5VctU9plE4zJbkNwRDYewnReN+V2eGbLNQUADaAC62HlVkGRcakS0rdpcmJV1PWpH1GXSmy+1RIdY2bdainFaV4A7Vk+0fodFX-skn1ffVBZ2ZuANAx9t0erdDnJEUNZTUVJXgJeADM623bRzLQ9haEwRh6pbhtkPfeqmr2A1qSWAT42CZqP1Y0kONM9TiXSZqQ3gEN3PU26N08+zD4JJuOPtcmSObUUk1bvdvUveAACEw2rVDjWicNK2ieAKuPS9EOJYrOHBQJeYFsWpZ2MJdF3g+9PQ7L1p2PagoJZDdVZMk-SpAA+q7jV7Ud2FHWbCtK6HqTBDNc0LVkV2rcJ-uByHRO65ucfPudJSp7l1Oe97GcwVnDPYXnZ0XUtgti9TdUA79VXJGa4wZthH7R+N5fB3ngwZFuakvdYGnUVTPMW1ugka5uH7CS3lUASJsMvaDbfu3lou97VBX+6eADWdhOLm-SDP14VUVre-m0r5V-m32PRAATI7AbO4LbQ-wAQiJo1mYTUtjBLIrcALnmluAAAZNA-6L0wEr2SOAAAPOAAAbB-eiLts6pG3olUufIZ7LzBtjTc6CYFwJIc-NBbR07JGPqfc+AwhjYSGgAWUATzQh-IlbUIgZuNolD4GgPAcgtBUR35agYVyE+Z8L6sOGr-LhJcvZ8kPrIphCiYaC0AUA3h25+6V2hm9Y6mtNxlBGAtHoXJT74x5smIxcdTHVznJ2Hs-ZBwylXFMHcAcK7OPeo3BxBj3IhLyk43Bpj9qRIZqYzeAEgLHXXCkwWH4BYAB8Mn6M2rEkx70Yn+IHlE96CTkFJI3Kkoar8ho5OtJpcJiU8mNRcbnNxC5PErhHH4zOgTDrBIcU7BizTUjw0NstAWIlpG9JKcdKZGiRhyOYZffBctyQ8yGTghm+CPRy3ANUIY1RkFbgdj7RKKFqx2F-LUAoS0pg2H6OAWo1Rqh3lPvzawDs76bN0e1D0ukGxNkshmAA6iUZIJkmQskQhySctRpx2XTFMMFpRIXMjcqmJFNhrA9FtiWOadhFAVirDWBwIxhKRTOXFM5yYZ64sLPiss9im4FQBidLK6ocr5zrhM4ukM4bA2eqA+GwR7DnV5FuYAAAdX+W5FDri3FKpw8ocaixEnK9WSq1qFGsALVaqzrQ-IBsEAAVrULkRcdngB4VPcatktR2CnNGTuUx2Wik5QeLch59qv2SVU9J4BlAjXAGzDl+5bnet9Qa5U9qRh2FPo0WoOjBROuBa6oNBt+YqMhva0oRQbDOotFhMqYbKJev2jjP1w0A1BoFqG914by2Vujfs+FM440JqTTjbCeaC1pqwhmutvz9EzxVKWrlT8IFv2ZSEn5Q0f5tH-tmr6bprVqNCWOhtZbDxlMqZuSRM7BmfwYmExp31x2eu9YKsSZ7z1bpyi4m9t6UwXojT6uZdS8odqcIm1I3an23t7YWruAGz1DWUZ+8AfKV1ru9qO19Xrd0pP3cBGl1MZ5Af7YexpPzT3PrvdlS9YzQP4c3YRt971ZL4eTBMqj1HVQIcjR++jDH71EcrXR+j4Han4egzzVdNrIOE2wYxFjL62NvuveJ8j5bKNTO-b+w2Kb4XAddVM7jQn6ktrWfx2DRCH6MaQ6kqIi80OQx+WRj1km5mCwNlMyzjbvVyYdaml1WF1PKJbQJ9d8GJOIcncg5D4A6Fma+rhzTrGZNXuY8+hz27H0Rek1Z8tvrONnoU12tLjTMNuay+EjhPHwl8fGt5uDBm-M7oC3u8AAAObD6GlY5aLfV2dx6Hx4eo3Fh917EvJi60RuTvXrS0ZI7Fxj768u3v62+jjo3b0FcS8VyGpW+S2tayJjrpHxtSem7JmzGW7LzMdSp-t4zOGLe09aXZIs9MbsM1VoLAB2FrYW2tJcc8R2zkz3vxec8pqxp31OcK87dtbX1m4ILdVF7lhdeWXfkggsZ69hXA1FWGe0ErpWyvlYq5VqrDzqsUJqpw2qCi6obvDm8X9jVmotXD-R12d7XlXQc1IRztynLBxcms1zbkAAN9pYpRRC3yzJjr3MeQ5cF4AAAk8o7Buj5wM4TX9g35CpwxNsGRUjxWvuAUU4AHA2nNU4cAfPLHWNsU4Pn1qbAPJsMznSekmzNksewhwXJf7dWqEfMc1k4UItsG7j3IwvfPKPm5ClUVry5uZIhTc+1bqSK5tED8aeojWCiJ0HGH5OjoOsJ0KIONX7BEL8XjPgEK8JE6Hnovr8i9F+sAun+mfX44y6Ogx7NXhZ5TaMn+vtfy9N+Tx+LP6C68V8L23qI9AohRGCDjBvi-F-WC-NeBG146TahZH0GwABRRkyQR5YvHlYuwQlJ63XtdWJwH5sJYrvtf+0Z9bb37c8LtFKcT-65sEy-BT+nBQgik38i0P9Rcv83McUHRBRldrRY1HJ8xCx78EDLFqhKYUwO4i1x4bYGV7ZNQJQyxwBd4r821EVHIgDA5kCnJUD0DMVID+QcC7YCVNQGR11iCSDA9tQhgygZhNwb9ECZJUk41qCkDYEnln8KCYJKl7IHJJC8EOCshLledNtxo+cABiOXLkBaFUQ2KIRXHvL6Lg28GYINAAeQAGkh0hpcwABBKkLsPfRoIWfRdWIwngwNM3OXfg22VdVJOXYQgQ1dDJWXeUG-OQ3wzcfw8gopRXENXRW6aDYggFcCCALQ8-P3WFEeKPM5X-EYd3T3b3I+L1d0Q8Yo8kIAA">Here is code from here uploaded on typescriptlang.org website</a>
