import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';

interface INotificationCenterProps {}

const NotificationCenter: FC<INotificationCenterProps> = ({}) => {
  return (
    <div className="notification-center absolute bg-white bg-opacity-80 dark:bg-gray-600 dark:bg-opacity-50 backdrop-filter backdrop-blur-lg duration-150 flex flex-col show">
      <div className="text-right text-2xs p-3 text-gray-600 dark:text-gray-200">Manage notifications</div>
      <div className="flex justify-center items-center flex-grow">
        <span className="text-xs text-gray-600 dark:text-gray-200">No new notifications</span>
      </div>
      <div className="control-center grid grid-cols-4 gap-1 p-4">
        <button
          type="button"
          className="flex flex-col items-start gap-3 bg-white dark:bg-gray-700 dark:text-white px-1 pt-2 pb-1 border border-gray-200 dark:border-gray-600 duration-150">
          <Image
            alt=""
            height={14}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAQAAADbnPi/AAAABGdBTUEAALGPC/xhBQAAAAJiS0dEAP+Hj8y/AAACYklEQVRo3u2a3XWjMBCFb9LAqoPQQdRBKIESKMEluASXQAmUIHeAO9B2oFSQPMQYRVlZAxrh1clcHjgH5KuPYZD1B4hEIpFIJBKJRL9XT2xOCi00WgBv3tUzHCZMMHCPflQftYfBR+Iw6KEejQo0GJKo/jGgeWRk18Eu0BmR3p7DBxzxJ7h2gYHF5F3RaNDiNSj3jiNO+8bWrMpQhR7jj18ocn2Z0rCb8jLMdwu9D677Fica7ALtvxtXHtnHdeg3efTfPIoi+7hTRlUa0x7IysvdKfOTUR6yLfX5GTbcENmUwD2w4obIB25cdctezpzTnitPEG5aWtCe1bf3WnNGNQWzbfkyGj7TgWzaYfDaEosBHTkYAxeuIlq2wV/2gt0Sw6F4gHtSfE93u5QnUox7HuA5y0ZSlOK94HQNhgNXEZ7/lMS9H+XlHap84C5p1pLHGm0yKF0K5zkJrK/nS3TcO5AfPlbS4RLUxgBsIvc7vJCBX6IRnN0ZgNX1bKPAaxQrPbsrkstdpfLPkjP4q03+t5bvIKF0hFOiJ8T60kWA16rZC9gxAdu9gBUTcKbyU+JvwdKbgM/Xs47cN6vqi5We3c8pgzSwu56byP1xFXCs9OzuSC53dbwNPWOit8Q26jEPR4/5wPt2fmIlVqi67iWte83TgR85cCscIlU3CK1umF/hREq5qapDifgCFU4GVjfdCpSc0B5L4Fa4ZFDdokyIXMGyV4hcwcLiF3JVS7fAtsXxn79Q5Po8/ZLtB3PcHrDBI1dVbaFZIk3ZpDTybFLi3gamof7/bWAikUgkEolEIlGt+gSLLCschFE1VwAAAABJRU5ErkJggg=="
            width={14}
            className="duration-150 filter invert"
          />
          <span>Location</span>
        </button>
        <button
          type="button"
          className="flex flex-col items-start gap-3 bg-white dark:bg-gray-700 dark:text-white px-1 pt-2 pb-1 border border-gray-200 dark:border-gray-600 duration-150 bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-500">
          <Image
            alt=""
            height={14}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAHCUlEQVR4Xt1aO28dRRQ+3+YfYEojd5ShQjISl4Y+oosLqJCoEqdBlBSUiCaEComKFLgj9DQBKZao4paGxLcM/AP2oHnszmPncWZ2fSOxkiXr3tnz+OY7jzlzQa/jAe2I6SURvcirBxHxxtZZmZ5o9e+hnxMAvyulzPx+GYTItGZMIk8TePYDIDQmWqadZ6Zjtbsg7JlyIAgVdGyfluyRoUOE5JWFA9Z5Pg7eBvbUyoRZwHqQ+hkgwcCtiZz3DQcRyIHQ41PPO9a2QwCQ2fkwxwHYS3NCn7/pt0IA+iSXCJl0HsClTYKnNFnARHkQhIYJl/nkteqnNzskxNJcpg2dn5IOcMnM76nXADxj4lO/2iVBWGlWKVpvKgSCbO8ogkuyzk+fgSwInpWrmZDwOIehB0CUmOy2eAyVpr0s7aedXwgCnhGzCQfLIAWCqg7sNUtiIogXqvzbgJYAgYXz0Boc7XMydDgoEPRjPGhJjE5ug/dWk8Av0ZKQ9nOjgUsmE/O1JwTBQtFQHUrZOAt83qgmJHNNziLmfZon2WeZMGvXbYK8RMYya15skQTrMV+zIrLaMIFO/cNQXzjUOBfngHQeTEqxyJ2Q7u35OHjVK3V1E9IrkjmheHZo0eSsLTKgtnELI420Je2tbTV5C/oG4TAnxrmPaHG5Iwf4ryRNPyfgIbFq4Uz5AuiSmWoJLz6UljchUR2I6AERfXtAAJaqALxi5qOOktUEABEFOQYKbdDfzPxmaVelo5Q0+hWuDsPwaOTx3tzCmlp/BuaLmmKoOUhouSQR3yWin/zXhmH4bhzH+2tZUFGeQQK4BvPx5Ig63MRdXvJNo42jSZcEAHNu8CqDHaa8tZYFIuWTEuvUjoieRoo/IKLfhLuhWjzNg7lX8joYLPCZM+gOTE8j9rToLVUzoelENAzDj+M4fjyDAlwx8ztyCd4hw3gj3wTgmthNlIbh1uNx/PeTBt2LpTqnSIevJtTxnJlvT5KGYXg8jmOLEdkkWDMFwBMmvuMdmBz4Hp2Ugposn9VNAAK4Vo2Pp6K1JLVVgdCTcyJ66LFPTZGyeUDiWEC/GLUUijp6wy/kFDYWFQGo7NwJEf0VrSn3EZTNKo3x5+DUDqjYsel8UwDquwYL4IxjUr8DqQxpq/HVHaw7MEfwRIY2GxYbqkuKQG16SVn5DF6AotNmPpbJcCIS70tTFukQiFJcUyJ3MEiM90CbTHRJcP6yOQlOiE3Tr4btu9kkKDIEeE6dZdD2P21VwN8E0BNmuuNKGK6YmnqQRB8g8totmhohjxF/MvPbDWJc+9PYCGn2ER9PId/Rg6wHgIh2IL8l1VC0tKRB+raHaQl+a1vwpI62DGxFqJ1QLeniMCTLZZHPuquYJGfb0nhgakdkmSZIZogp5x2POg7zON6LgvmMQBeCihQxICpjadvD5KcMP8xxOI8OQK+YcUSqLyne6y1ktCbBeSDi8o4aiFB2INKyp10MsAqCXdF0kg1D53PwzHvrma0Sgf3Qhy+6rfofxVc7TSmWXnkANIeAax5MP2yvtIJSpS9CzojTv/8JJgHmzGY2Yf53Lg1q4vyLKrk+ZYQgF0ngA7SGAUqJN6/zum9zm/M5EV0kLJGEwF0A35hTp+v7buJuoB2AJb+iGA2AUKOyL6JpUXSYDBLxDsDX+o4w0uOcx4s1vX+8Ie0ApMllQFBNyrRj3j4DuFJ/4zj+4Z/nragHwzC8q4YsetCSCOCb2Hm/8LYkzdJaBcIPzPxhuCiVkuRpCsCvzPxp08/pGjyqMEBuqKfzHMCXxHyUP6Sm5ULfpbO5awHU7P+r1AVIl1UZULYJgdgiEA0YHjHzR37v7ie0+P+ZksAewM8jj/cFTVVlr+tQ6WuWOKmEn4iElGzdDbeGz3jUg9Q3psxuLIeakO+J6B+bI75vGK8X9lQ+INmGAa6QS6IvWQbrMEtEt68RAbCxcSEAZrjo9UL+5ZkiaDwCbHcy+4bl/yZUkppVuxvcDmyZJBEDys7JFHkyJJ2g7GKjWfXSkzIAGyhIgOd+UOCYLyVQ2gN5zlu8L2PARkAYMfb87EzJ2yDUK1yWBFkGQDbLt6t2OWBS7U+E+onQ+2YDAL0qwq0245Pg6Zzrr7fHdCIHfCxf1twNiq1NDVeSB61kVkgmlXa6JzMWOPyFiO0DkgYn3J0DRwxFvYZ1iuoGJLwX8BqhlCFlLQaOqZNyt3Te1C0QsGzyNwwBGSDlRkgmo3PHFsno4DnAWiBqhFY7OQlIxJYP84YMEJt8WAAqZlkADkO9uQpMvxJzI+IkPcWQSjNoIamKdbUtTAJbGoq2ie9d7Zn1vw0BKaeTE6EasFq4UENiWfF2WCZWtqrmx8GrgKQTrBmddz36RoJReSBSM6X2vbMgsmW+C2NzMHwdYTgb/x+HvDpxxRPLbQAAAABJRU5ErkJggg=="
            width={14}
            className="duration-150 filter invert"
          />
          <span>Battery saver</span>
        </button>
        <button
          type="button"
          className="flex flex-col items-start gap-3 bg-white dark:bg-gray-700 dark:text-white px-1 pt-2 pb-1 border border-gray-200 dark:border-gray-600 duration-150">
          <Image
            alt=""
            height={14}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMTowNzowMSAyMDozNDo0My5EqDYAAAUiSURBVHhe7VpLbtswEI3tfBokgXuD5AZNb+CcoL5BU6AHcG+QZZfuvkCTXXdNVt06J6iz66KL9ASJkWRh5KO+p4wEiqYUyhzJLuwHDERR8pDzOByOSK/MCq1W62uz2YxE/kj14gBGPxkERGtrax/lUa1oynUWaMg1RhRF21KsFbMkYC6wJECuC4slAXJdWCwJkGshkLR0IEeQY0hfqucOklxdifyS6nBA2YDJSiIkQh5NDVMfJTQREuNNnVfyKBxQliGAEkoCdPw29I3b7fZreVQaDuMpegSggb6jgSASaPDq6moPOj5vbGzsSXVp5BhP0ZsCBI11NKIyHaZFgfHVfFzNEwm1G58gjwR5XBtcfYDU81ntIkEe5YLznHMe7zKgXpu/NWQA3X2sCPvyMyeoy/HbevcUDBKGkIFUTwDvdfgcV06VF0V0Ui5BxKGoyQDvUaf57vxtqDDKo2OnGPXIFtvoIoGOocsj6AV43skjyReZTQktsMNPT0+DRqPRlqpSiKLJGQUiPtzf36sH25Zc1cARgQE/YfwrqSoN/DYjBHR24T1/QewwrlCCKgEy8t9DjE8Ag0eJnipJUPsa5JwPcXsbcPkODL6Q25QEtPHNFROmhRoBt7e3fS3jCRj6+vHxcR8knEhVCjw7lWIwVAhgNIbx7+VWFSDhEAafs5x4AbCLNo+kHAQVAjBKPSlWgp2dnS5jAkRq4jaDlr8EwQRwPcbIvJPbSjAaja7RRjriQsTu+vp6N64IQDABcM+OFFUB189kl1tbW8wBRs93z8A7sydAoxM2MMJp9E9AL8AlE/zwXjD5wZkgU1W45xuWjSAVik8PDw8Te490edT/kNsY8EBnowzMUnRie3t7GJMKAw4h5odFrkDpRCoq9bGY+X6I5O0Qcf139CljqLyT97VpypC5SwMFupb3+o0G3yInTzMxKktGXsMD4NYnXPrkdgJsT4ox0OaBGS/wnNPENyhfqCyDWoDxI7hm0JIKQi6l6IM9EuDdIJSfmKNfAboS7JzwSYHhDT32U25fQi/1WXsu2UiDhgXOJTQYHATx2xc/d8sEwdrAOZcEQYorqBUJfnONkfXK6vCuvRVXxt2dCI4B6NSpZGalwRwfJOz7bHQwYqOdTM4Br8ndivNFMAEYhdKdgOFnMOaAWeR4PPYaxbu7O3pJZrUi+VKcGirzByScYjTipSeJAzQSZQZMrumxkejwcHNzc1AU6Fzg6N/c3FCHSQA3RqY+UVIFDOPpcSYGoHzJjssrQaCXyZxPBfpVPofVgA7x6NwmIc625JWpQL228ZDg4KcOGorOXjtI4P5+6S0sOfzgmYNtPI/S1bbEVMGOuUgQIo7zcnwTQuQRDHXm875Lpi/Ukwh2EMGJX3JxwGJQNJdJlM9gyADXTEaJuj2uCrLUOb9NQEwlZwPqsD3BFnNEfUV75FUAY7oQHk9NzEm6MjqeZom2QSXEeTQ2c8CoTHTGvXNZIkF4PrGMeUju4SiB56lO9kWq64FtPOUlF2UARDBUOR4n+K7529pIcBkvHSi9P8dp4rMyuIA2XclRtSQUGF97ZEab6n/cKsQ8GZ+gtj5BYSVsM24wLoSkywUk6P2jFQrV55ulMyi3zyEheK8gBZWZykONJ0x9ojPokMNBghcBXhsi8l3PE9pzlL8UbVvPCuwT+4Zi0s8qN2/DYY1WsAdMi7k6F5gFlgTIdWGxJECuC4slAXKdBTJ/d8FSWOqs4L8HDE7/mKGRWU6HlZV/majli751HrUAAAAASUVORK5CYII="
            width={14}
            className="duration-150 filter invert"
          />
          <span>Night light</span>
        </button>
        <button
          type="button"
          className="flex flex-col items-start gap-3 bg-white dark:bg-gray-700 dark:text-white px-1 pt-2 pb-1 border border-gray-200 dark:border-gray-600 duration-150 bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-500">
          <Image
            alt=""
            height={14}
            src="data:image/png;base64,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"
            width={14}
            className="duration-150 filter invert"
          />
          <span>Bluetooth</span>
        </button>
        <button
          type="button"
          className="flex flex-col items-start gap-3 bg-white dark:bg-gray-700 dark:text-white px-1 pt-2 pb-1 border border-gray-200 dark:border-gray-600 duration-150">
          <Image
            alt=""
            height={14}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAL1QTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA69JzzAAAAD90Uk5TAC7/hRHuC/Np2NoCu02fvoIxZqFK+hxXXiTwAe20vYr0x2sG780ZzAXG8mjKy8VYs0uLZ6BdgzAlvEzZEi+ED2jCTAAAAXBJREFUeJztlttSwkAMhpcVrSgCIloRRDwf6gEVPKG+/2Nht9NsspbZbOqd/e8yTb7ppl+nVapKleLUdJ4VGaAOgNU1GSECwroM0ADAxqYI0ASA3hIBWhbQFgE6FqC3JYAuAuxIAD0E2N0TAGoIIJKpjgEimSJM4MgU5837Wd3AAI5M/bz5IFtZEwM4Mg2GefOhqVsEwJFpBN3mEB0C4Mh0BM3mEF0KYMgU2+70ED0KYMjU1yEZH5+cOoDBWRBB6/OLpVtk5vJq2Ra5cQSN/RNOrstsMc3NHwNKHyF8iUnJx3hLH2OwSHeOSGE7jO4TRyP1YK9OfspHOsB4mZ6g2bzOzxQw9c6rNjTP0vKFAl6983aHE1NPyfzIfwNv5ABKvRPAhx8AO5xl9RzPzwX/CGMMSPz9bj7x/FDwafvCgO/weeKR6POOPWJI9DvYI79EBUEeMSQqCPKIIVFBrEcSiRT2SCCRwh5JJFLYI4lEVf5lFjZDGiLcW1VzAAAAAElFTkSuQmCC"
            width={14}
            className="duration-150 filter invert"
          />
          <span>Offline mode</span>
        </button>
        <button
          type="button"
          className="flex flex-col items-start gap-3 bg-white dark:bg-gray-700 dark:text-white px-1 pt-2 pb-1 border border-gray-200 dark:border-gray-600 duration-150">
          <Image
            alt=""
            height={14}
            src="data:image/png;base64,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"
            width={14}
            className="duration-150 filter invert"
          />
          <span>Connect</span>
        </button>
        <button
          type="button"
          className="flex flex-col items-start gap-3 bg-white dark:bg-gray-700 dark:text-white px-1 pt-2 pb-1 border border-gray-200 dark:border-gray-600 duration-150">
          <Image
            alt=""
            height={14}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAHdElNRQflBwESNxuFAYUiAAABNUlEQVRo3u2ZWxGDMBBFl04FgINKqIRKQEIkFAc4qBQkIKESkJA4oD+d4TFAks0S9uOefJZMzz5CmobIjyFLY4ZhyRAVAUKWyoCnJHBUhQiNmXSIiIpbxi8LQp3QPerpkAJzmDWFugxBCEIQgtDVQAhCqYTs9mft8ZuoyxCE4oQkDjyWTIrQsmFlDjyOqsgZ00/Yotj5II3YdTkTUtdD2+8h7ptHIMPqMgQhCKUSd7aPhbHq1GUIQoc4XUKOmrObmrEFacoQhCAkwvYqy/nf/Qp1GVoKuat11kKNiFJzdVAATLQid6e9lM5T7Dq3lRH6Ct4vP7SUS6xsD/G7eZMm1DPiNZ6ylXydtyfaemfecDir4+qUnnIN7EBePKGO3Q3+UBhlq4WbeTk+8vlJG5bbRwAAAP78APPHAKqC8jUpAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA3LTAxVDE4OjU1OjI3KzAwOjAwKBJ0BgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNy0wMVQxODo1NToyNyswMDowMFlPzLoAAAAASUVORK5CYII="
            width={14}
            className="duration-150 filter invert"
          />
          <span>Project</span>
        </button>
        <button
          type="button"
          className="flex flex-col items-start gap-3 bg-white dark:bg-gray-700 dark:text-white px-1 pt-2 pb-1 border border-gray-200 dark:border-gray-600 duration-150">
          <Image
            alt=""
            height={14}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAQAAAAkGDomAAAAUElEQVRo3u3OwQ0AIAgAMfZfWhfwYTDEKL1boBGSJEmSJEmS8o3FgICAgICA+wRAQEBAQMAzAiAgICBgD2AdARAQEBDwF+AtAiAgICDgy8AJ1BvWcMBO4s8AAAAASUVORK5CYII="
            width={14}
            className="duration-150 filter invert"
          />
          <span>Network</span>
        </button>
        <button
          type="button"
          className="flex flex-col items-start gap-3 bg-white dark:bg-gray-700 dark:text-white px-1 pt-2 pb-1 border border-gray-200 dark:border-gray-600 duration-150">
          <Image
            alt=""
            height={14}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAQAAABJXchjAAACZ0lEQVRo3u2YUbmEIBCFTwQiGMEIRDACEYxABCMYYSMQwQhEoAH3QUSQwUXF9eE6vvntLj+cmTOzANfDwsJCQUFCoMUjYTePwYjuaYgVpfktSAMOAQm1QVFPydNhgAlARjA8FCI4FYMejwUPQD7PnQcgvDT6qfwAAIaPl6W9s0Q1FAaIbFH2d2PERakhSZTOyXITBmVVlFG192IALbrEqmRSDwvGdG+lMPTQgTRtIspSsD8oyxVEZFL0J/YlA1ni+LjMYHXzIffekBjMvR9rQuSznWEiRRHubVuzREsw4k8o1+ir+sQehnGVwqLWNqM1dc3K7OQGlRmqbl7YrxiS2Ldw36lu23kMTex7lqmrDZHHEMRZjDUFWVrWPoZO8qK7IghzzcpEZ4AvGL2rkRT/sFt0fkraPviCwQhBFNlditsSDbGPkS4pyd6yMzfrzfw0ogcHB998Mo8xLzkk6aoQ7SMXQ8H49h2jS6yal0Ks7m+hC/WjMdokNZtl9X2ItR2bcu2yGOlaBRArwnS4kCiMExDMI5z5C9d6EYdSv6Ni8l54ZtoyR76dgxguzMUHEXIQ3OcCux8hBzGdngJPINAQIjOshyc1Xw+tzwUEGkITHW/tnjrbO04iUBA8GdMb9MmVWApxGoGCGINzYBCBbdvkbk55uAsIFIRxFtNsbuGW7inBoxa2OON5V0kguN9lvPwnew8T30ugBoRMDn2C2HWLywgphNrsjBdP2xfm5i3EtHvlszdtox7EIgE/9AtjUFtVII5eAscIto4cx8eX2GFQwyfqSftCvBAvxAtRGaLm80LYqtK+8a/jD7vTYnvmIF/BAAAAAElFTkSuQmCC"
            width={14}
            className="duration-150 filter invert"
          />
          <span>Sharing</span>
        </button>
        <button
          type="button"
          className="flex flex-col items-start gap-3 bg-white dark:bg-gray-700 dark:text-white px-1 pt-2 pb-1 border border-gray-200 dark:border-gray-600 duration-150">
          <Image
            alt=""
            height={14}
            src="data:image/png;base64,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"
            width={14}
            className="duration-150 filter invert"
          />
          <span>Tablet mode</span>
        </button>
        <button
          type="button"
          className="flex flex-col items-start gap-3 bg-white dark:bg-gray-700 dark:text-white px-1 pt-2 pb-1 border border-gray-200 dark:border-gray-600 duration-150">
          <Image
            alt=""
            height={14}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMTowNTozMCAwMzoyNzo1OOrpYzUAAAG4SURBVHhe7ZlZTsQwEEQDF4Obwc2GORmkUFtq9Xh3YjtOPamUUZZJ+3n5cDZCCCGEEHJtvvf8SvD7dnzueexxElxwDteWJyTAZlkhMQE4H7u2hBDM+9xGpmRdbg1Bg/QiaJPq5ZgQJPX8UGI971LagJQQBNeHjRQUmNNwF9zb0oPufb7/tnFiWt6Xja8Am7OKKZFSxJscS/C95GfPU45IDyAF+ZCjpaZtRWjrZ/R6LahF11ZE64g43Xoh1bW9y/H2UIRAEQJFCBQhUIRAEQJFCBQhUIRAEQJFCBQhUIRQI0JvvGC3aBZ0LcWbQzUisBM1O8U1tk4NbJPNwpccq6jdYZpxl6qppiMWyxnWiab1oQW7pT4aXUv3jhn6csXwTpllVOgahnWILgKf23pjPzsOw46Knh987AedkdPzH9srPWRYCSNG4wu2KORMGb3fV0Sv4qaW4PAVeeS8tesRMp0Eh0/GEfPXrkPItBIcPhlIzejwjQJkegkaXy/iXE4jcE/o+UsS6tGQkJAA5Mj1ZgixxuE8GojE7skZRZchJsSX5QRYUkKWF2BBY/Uagt+3EkAIIYQQshDb9geteivsfmfG5gAAAABJRU5ErkJggg=="
            width={14}
            className="duration-150 filter invert"
          />
          <span>Security</span>
        </button>
        <button
          type="button"
          className="flex flex-col items-start gap-3 bg-white dark:bg-gray-700 dark:text-white px-1 pt-2 pb-1 border border-gray-200 dark:border-gray-600 duration-150 bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-500">
          <Image
            alt=""
            height={14}
            src="data:image/png;base64,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"
            width={14}
            className="duration-150 filter invert"
          />
          <span>Dark mode</span>
        </button>
      </div>
    </div>
  );
};

export default NotificationCenter;
