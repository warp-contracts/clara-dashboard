import {Component, createResource, Show} from "solid-js";
import claraImageUrl from "../assets/clara.png";
import {cachedMarketData} from "../ao/fetch-market-data";
import {formatAmount} from "../utils/formatters";

export const Navbar: Component = () => {
    const [marketData] = createResource(cachedMarketData);

    return (
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark pb-2 pt-2"
             style={"background-color: #ae0822 !important"}>
            <div class="container">
                <a href="/agents" class="navbar-brand">
                    <img src={claraImageUrl} alt="CLARA" width="60" height="60"/>
                </a>
                <a class="navbar-brand" href="/agents">
                    C.L.A.R.A. Dashboard
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/agents">Agents</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/tasks">Tasks</a>
                        </li>
                    </ul>
                    <Show when={marketData()} keyed>
                        <ul class="navbar-nav">
                            <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                                <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
                                <hr class="d-lg-none my-2 text-white-50"/>
                            </li>
                            <li class="nav-item">
                                <span class="badge bg-light fs-5">Total earned: {formatAmount(marketData()?.totals?.rewards)}</span>
                            </li>
                            <li class="nav-item">
                                <span class="badge bg-light fs-5">Total tasks: {marketData()?.totals?.done}</span>
                            </li>
                        </ul>
                    </Show>
                </div>
            </div>
        </nav>
    );
};
